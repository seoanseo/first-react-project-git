import headerStyles from '../../styles/header.module.css';
import { useState } from 'react';

function Header({
  brandColor = {
    opacity: 100,
    color: '#FF7A59',
  },
  text = `Hello from HubSpot Academy's React Course!`,
}) {
  const navLinks = [
    {
      href: '/cms-react-home',
      label: 'Home',
    },
    {
      label: 'Cars!',
      submenu: [
        {
          href: '/cms-react-cars/sedans',
          label: 'Sedans',
        },
        {
          href: '/cms-react-cars/suvs',
          label: 'SUVs',
        },
        {
          href: '/cms-react-cars/trucks',
          label: 'Trucks',
        },
      ],
    },
  ];

  

  const [isCarsSubmenuOpen, setIsCarsSubmenuOpen] = useState(false);

  const handleCarsMouseEnter = () => {
    setIsCarsSubmenuOpen(true);
    console.log("Mouse entered Cars!");
  };
  
  const handleCarsMouseLeave = () => {
    setIsCarsSubmenuOpen(false);
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
                style={{
                  color: brandColor.color,
                  borderColor: brandColor.color,
                  opacity: brandColor.opacity / 100,
                  cursor: 'pointer',
                }}
                onMouseEnter={handleCarsMouseEnter} // Move handler here
                onMouseLeave={handleCarsMouseLeave}  // Move handler here
              >
                {navLink.label}
              </span>
              {isCarsSubmenuOpen && (
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
    </header>
  );
}

export default Header;