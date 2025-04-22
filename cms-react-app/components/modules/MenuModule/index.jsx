import React, { useState, useEffect } from "react";
import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import Button from "../../islands/BasicButton.jsx?island";
import Layout from "../../Layout.jsx";

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
        href: item.link_field.url.href,
        label: item.text,
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
            
        <Island module={Button} />
       </Layout>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}