import headerStyles from "../../styles/header.module.css";
import React, { useState } from "react"; // Ensure React is imported

export default function MenuBar({ navLinks, brandColor }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleItemsMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleItemsMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <nav className={headerStyles.nav}>
      {navLinks &&
        navLinks.map((navLink) => (
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
                    cursor: "pointer",
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
    </nav>
  );
}