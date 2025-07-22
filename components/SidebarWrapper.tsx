'use client'

import Link from "next/link";
import { sidebarLinks } from "@/lib/sidebarsLinks";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const usePath = usePathname();

  return (
    <aside className="fixed top-18 left-0 h-[calc(100vh-3rem)] w-60 bg-gray-800 text-gray-200">
      <nav className="flex flex-col gap-2">
        {sidebarLinks.map((item,index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                usePath === item.href ? "font-semibold text-blue-400" : ""
              }`}
            >
              {item.title}
            </Link>
            {item.subItems && (
              <div className="ml-4 flex flex-col gap-1">
                {item.subItems.map((sub,i) => (
                  <Link
                    key={i}
                    href={sub.href}
                    className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                      usePath === sub.href ? "font-semibold text-blue-400" : ""
                    }`}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};