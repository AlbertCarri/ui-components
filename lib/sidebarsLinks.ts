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
  {
    title:"Components Radix-UI",
    href:"/radix-ui",
    active: false,
    subItems:[
      {title:"Button",href:"/button-radix"},
      {title:"DropDown Menu",href:"/dropdownmenu"},
      {title:"Input Label",href:"/input-label"},
      {title:"Modal",href:"/modal-radix"},
      {title:"Switch",href:"/switch-radix"},
    ]
  }
];
