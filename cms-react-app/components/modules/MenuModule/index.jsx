// Import the pre-built module fields
import {
    ModuleFields,
    MenuField
    } from "@hubspot/cms-components/fields";

    import { Menu, Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import Layout from '../../Layout.jsx';

export function Component({ fieldValues, hublParameters = {} }) {
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
        href: item.link.href,
        show_submenu: item.show_submenu,
        sub_menu_items: item.submenu_items ? item.sub_menu_items.map(sub => ({
            label: sub.text,
            href: sub.link.href,
        })) : [],
    };

    if (item.show_submenu && item.sub_menu_items) {
        menuItem.submenu = item.sub_menu_items.map(sub => ({
            href: sub.link.href,
            label: sub.text,
        }));
    }

    return menuItem;
}) : [];
    return (
        <Layout>
         {prettyPrint(menuItems)}
            
        <Island module={MenuBar} NavLinks={menuItems} brandColor={brandColor} />
       </Layout>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}