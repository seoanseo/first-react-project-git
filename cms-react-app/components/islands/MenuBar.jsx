// Import stylesheet
import headerStyles from '../../styles/header.module.css';

// Import useState hook to update the count number
import { useState } from 'react';



export default function NavMenu({ navLinks, brandColor }) {
    // Create a state variable to hold the count
const [isSubmenuOpen, setisSubmenuOpen] = useState(false);

  const handleItemsMouseEnter = () => {
    setisSubmenuOpen(true);
  };

  const handleItemsMouseLeave = () => {
    setisSubmenuOpen(false);
  };
    

    // Return a menu   
    return <nav className={headerStyles.nav}>
    {navLinks.map((navLink) => (
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
  </nav>;
}