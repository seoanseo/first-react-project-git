// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';

export function Component({ fieldValues, hublParameters = {is_global : true} }) {
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
const menuItems = fieldValues.menu_items
  ? fieldValues.menu_items.map((item) => {
      const hasSubmenu = item.show_submenu && Array.isArray(item.sub_menu_items) && item.sub_menu_items.length > 0;

      const menuItem = {
        label: item.text,
        href: item.link_field?.url?.href || '',
        sub_item_1: item.sub_menu_items?.[0]?.text || '',
      };

      if (hasSubmenu) {
        menuItem.submenu = item.sub_menu_items.map((sub) => ({
          label: sub.text,
          href: sub.link_field?.url?.href || '',
        }));
      }

      return menuItem;
    })
  : [];

    return <nav className={headerStyles.nav}>
        <prettyPrint>hublParameters</prettyPrint>
       <Island module={MenuBar}  navLinks={menuItems} brandColor={brandColor} />
        </nav>;
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    global
   
}