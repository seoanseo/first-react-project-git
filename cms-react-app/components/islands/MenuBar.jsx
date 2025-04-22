import headerStyles from '../../styles/header.module.css';
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
    <nav className={headerStyles.nav}>
      {navLinks.map((navLink, index) => (
        <div key={navLink.label} className={headerStyles.navItem}>
          {navLink.submenu ? (
            <div
              className={headerStyles.dropdown}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                style={{
                  color: brandColor.color,
                  borderColor: brandColor.color,
                  opacity: brandColor.opacity / 100,
                  cursor: 'pointer',
                }}
              >
                {navLink.label}
              </span>
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
