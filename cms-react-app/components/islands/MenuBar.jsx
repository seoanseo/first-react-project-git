import headerStyles from '../../styles/header.module.css';
import customStyles from '../../styles/custom_menu.module.css';
import PrettyPrint from '../PrettyPrint.jsx';

import { useState } from 'react';

export default function MenuCreator({navLinks} ) {
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
  
        <div key={index} className={headerStyles.navItem}>
          {navLink.show_submenu && navLink.children ? (
            <li
              className={headerStyles.dropdown}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a className={customStyles.menu__link}
                style={{
                  color: 'red',
                  cursor: 'pointer',
                }}
              >
                {navLink.text}
              </a>
              {openIndex === index && (
                <ul className={headerStyles.submenu}>
                  {navLink.children.map((subItem) => (
                    <li key={subItem.index}>
                      <a
                        href={subItem.link_field?.url?.href}
                                    >
                        {subItem.text}
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
                color: 'green',
                cursor: 'pointer',
              }}
                            href={navLink.link_field?.url?.href}
            >
              {navLink.text}
            </a>
            </li>
          )}
        </div>
      ))}
      </ul>
    </nav>
  );
}
