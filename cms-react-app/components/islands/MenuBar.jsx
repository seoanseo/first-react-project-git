import headerStyles from '../../styles/header.module.css';
import customStyles from '../../styles/custom_menu.module.css';


import { useState } from 'react';

export default function CounterButton({ navLinks, brandColor }) {
  const [openIndex, setOpenIndex] = useState(null); // Track which submenu is open

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <nav className={customStyles.custom_nav__nav}>
      <ul role="menu" className={`${customStyles.menu__wrapper} ${customStyles['no-list']}`}>
      {navLinks.map((navLink, index) => (
        <div key={navLink.label} className={headerStyles.navItem}>
          {navLink.submenu ? (
            <li
              className={headerStyles.dropdown}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a className={customStyles.menu__link}
                style={{
                  color: brandColor.color,
                  borderColor: brandColor.color,
                  opacity: brandColor.opacity / 100,
                  cursor: 'pointer',
                }}
              >
                {navLink.label}
              </a>
              {openIndex === index && (
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
            </li>
          ) : (
            <li className={headerStyles.no_dropdown}>
              <a className={customStyles.menu__link}
              style={{
                color: brandColor.color,
                borderColor: brandColor.color,
                opacity: brandColor.opacity / 100,
              }}
              href={navLink.href}
            >
              {navLink.label}
            </a>
            </li>
          )}
        </div>
      ))}
      </ul>
    </nav>
  );
}
