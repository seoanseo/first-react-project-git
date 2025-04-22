// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';

export function Component({ fieldValues }) {
     const brandColor = {
        color: "#007bff",
        opacity: 100,
    };

  // Function to pretty-print fieldValues
  const prettyPrint = (obj) => {
    return (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(obj, null, 2)}
        </pre>
    );
};
const menuItems = fieldValues.menu_items ? fieldValues.menu_items.map((item) => {
    const menuItem = {
        label: item.text,
        href: item.link_field.url.href,
        show_submenu: item.show_submenu,
    };

   
    return menuItem;
}) : [];
    return <nav className={headerStyles.nav}>
       <Island module={MenuBar}  navLinks={menuItems} brandColor={brandColor} />
        </nav>;
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
    icon: `menu`,
    category: `Custom Modules`,
    type: `module`,
    isGlobal: true,
}