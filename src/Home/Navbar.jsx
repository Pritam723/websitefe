import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import GridIndiaLogo from "./static/GridIndiaLogo19082024.png";
// import "./index.css";
import "./static/flags.less";
import "./static/navbar.less";

export default function TemplateDemo() {
  // const itemRenderer = (item) => (
  //   <a className="flex align-items-center p-menuitem-link">
  //     <span className={item.icon} />
  //     <span className="mx-2">{item.label}</span>
  //     {item.badge && <Badge className="ml-auto" value={item.badge} />}
  //     {item.shortcut && (
  //       <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
  //         {item.shortcut}
  //       </span>
  //     )}
  //   </a>
  // );
  const items = [
    {
      label: "HOME",
      // icon: "pi pi-home",
    },
    {
      label: "About US",
      // icon: "pi pi-star",
    },
    {
      label: "SYSTEM OPERATION",
      // icon: "pi pi-search",
      items: [
        {
          label: "TTC/ATC",
          icon: "pi pi-bolt",
          // shortcut: "⌘+S",
          // template: itemRenderer,
        },
        {
          label: "OUTAGE",
          icon: "pi pi-server",
          // shortcut: "⌘+B",
          // template: itemRenderer,
        },
        {
          label: "FORECASTING",
          icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          // template: itemRenderer,
        },
        // {
        //   separator: true,
        // },
        {
          label: "FRC",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              // template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              // template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "SCHEDULING",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "MARKET OPERATION",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "OPEN ACCESS",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "REPORTS",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "SCADA",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "USEFUL LINKS",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "DOCUMENTS",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
    {
      label: "MORE",
      // icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
    },
  ];

  const start = (
    <img alt="logo" src={GridIndiaLogo} height="40" className="mr-2"></img>
  );
  // const end = (
  //   <div className="flex align-items-center gap-2">
  //     <InputText
  //       placeholder="Search"
  //       type="text"
  //       className="w-8rem sm:w-auto"
  //     />
  //     <Avatar
  //       image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
  //       shape="circle"
  //     />
  //   </div>
  // );

  return (
    <div className="card">
      {/* <Menubar model={items} start={start} end={end} /> */}
      <Menubar model={items} start={start} />
    </div>
  );
}
