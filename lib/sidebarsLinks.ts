export interface SideBarLinkType {
  title: string;
  href: string;
  active?: boolean;
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
    active: false,
    subItems: [
      { title: "Botones", href: "/button" },
      { title: "Inputs", href: "/input" },
      { title: "Modal", href: "/modal" },
    ],
  },
];
