"use client";

import Link from "next/link";
import {
  SideBarLinkType,
  sidebarLinks as initialSidebarLinks,
} from "@/lib/sidebarsLinks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

export const SidebarWrapper = () => {
  const usePath = usePathname();
  const [links, setLinks] = useState<SideBarLinkType[]>(initialSidebarLinks);

  const toggleSubmenu = (index: number) => {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, active: !link.active } : link
      )
    );
  };

  return (
    <aside className="fixed p-4 top-18 left-0 h-[calc(100vh-3rem)] w-80 text-xl bg-gray-800 text-gray-200">
      <nav className="flex flex-col gap-2 ml-8">
        {links.map((item, index) => (
          <div key={index}>
            <div className="flex">
              <Link
                href={item.href}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSubmenu(index);
                }}
                className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                  usePath === item.href ? "font-semibold text-blue-400" : ""
                }`}
              >
                {item.title}
              </Link>
              {item.subItems && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu(index);
                  }}
                  className="ml-2 cursor-pointer"
                  aria-label="Toggle submenu"
                >
                  {item.active ? <ChevronDown /> : <ChevronRight />}
                </button>
              )}
            </div>
            <AnimatePresence>
              {item.subItems && item.active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="ml-4 flex flex-col gap-1">
                    {item.subItems.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                          usePath === sub.href
                            ? "font-semibold text-blue-400"
                            : ""
                        }`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </aside>
  );
};
