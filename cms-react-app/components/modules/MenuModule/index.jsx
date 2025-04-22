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
        sub_menu_items: item.submenu_items ? item.sub_menu_items.map(sub => ({
            label: sub.text,
            href: sub.link.href,
        })) : [],
    };

    if (item.show_submenu && item.sub_menu_items) {
        menuItem.submenu = item.sub_menu_items.map(sub => ({
            href: sub.link.url.href,
            label: sub.text,
        }));
    }

    return menuItem;
}) : [];
    return <nav className={headerStyles.nav}>
        {menuItems.map((navLink) => (
          <div key={navLink.label} className={headerStyles.navItem}>
            {navLink.submenu ? (
              <div
                className={headerStyles.dropdown}
                onMouseEnter={handleItemsMouseEnter}
                onMouseLeave={handleItemsMouseLeave}
              >
                <span
                  style={{
                    color: brandColor.color,
                    borderColor: brandColor.color,
                    opacity: brandColor.opacity / 100,
                    cursor: 'pointer', // Indicate it's interactive
                  }}
                >
                  {navLink.label}
                </span>
                {isSubmenuOpen && (
                  <ul className={headerStyles.submenu}>
                    {navLink.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          style={{
                            color: brandColor.color,
                            borderColor: brandColor.color,
                            opacity: brandColor.opacity / 100,
                          }}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                style={{
                  color: brandColor.color,
                  borderColor: brandColor.color,
                  opacity: brandColor.opacity / 100,
                }}
                href={navLink.href}
              >
                {navLink.label}
              </a>
            )}
          </div>
        ))}
        <div className={headerStyles.navItem}>
        <Island module={MenuBar}  navLinks={menuItems} brandColor={brandColor} />
            </div>
      </nav>;
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}