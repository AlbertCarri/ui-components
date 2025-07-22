export interface SideBarLinkType {
  title: string;
  href: string;
  subItems?: SideBarLinkType[];
}

export const sidebarLinks = [
  {
    title: "Documentación",
    href: "#",
  },
  {
    title: "Components UI",
    href: "#",
    subItems: [
      { title: "Botones", href: "/button" },
      { title: "Inputs", href: "#" },
    ],
  },
];
