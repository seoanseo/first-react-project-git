import headerStyles from '../../styles/header.module.css';
import { useState } from 'react';

function Header({ brandColor, text }) { // Keep props, even if not used immediately
  const navLinks = [
    {
      href: '/cms-react-home',
      label: 'Home',
    },
    {
      label: 'Cars!',
      submenu: [
        {
          href: '/cars/sedans',
          label: 'Sedans',
        },
      ],
    },
  ];

  const handleCarsMouseEnter = () => {
    console.log("Mouse entered Cars!");
  };

  const handleCarsMouseLeave = () => {
    console.log("Mouse left Cars!");
  };

  return (
    <header className={headerStyles.header}>
      <h1>{text}</h1>
      <nav className={headerStyles.nav}>
        {navLinks.map((navLink) => (
          <div key={navLink.label} className={headerStyles.navItem}>
            {navLink.submenu ? (
              <div className={headerStyles.dropdown}>
                <span
                  onMouseEnter={handleCarsMouseEnter}
                  onMouseLeave={handleCarsMouseLeave}
                  style={{ cursor: 'pointer' }} // Keep minimal style
                >
                  Cars!
                </span>
              </div>
            ) : (
              <a href={navLink.href}>{navLink.label}</a>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;