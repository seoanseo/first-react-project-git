import headerStyles from '../../styles/header.module.css';
import { useState } from 'react';

function Header({ /* ... props ... */ }) {
  // ... your navLinks array ...
  const [isCarsSubmenuOpen, setIsCarsSubmenuOpen] = useState(false);

  const handleCarsMouseEnter = () => {
    setIsCarsSubmenuOpen(true);
    console.log("Mouse entered Cars!", isCarsSubmenuOpen); // ADD THIS
  };

  const handleCarsMouseLeave = () => {
    setIsCarsSubmenuOpen(false);
    console.log("Mouse left Cars!", isCarsSubmenuOpen);   // ADD THIS
  };

  return (
    <header className={headerStyles.header}>
      <h1>{text}</h1>
      <nav className={headerStyles.nav}>
        {navLinks.map((navLink) => (
          <div key={navLink.label} className={headerStyles.navItem}>
            {navLink.submenu ? (
              <div
                className={headerStyles.dropdown}
                onMouseEnter={handleCarsMouseEnter}
                onMouseLeave={handleCarsMouseLeave}
              >
                <span
                  style={{ /* ... styles ... */ }}
                >
                  {navLink.label}
                </span>
                {isCarsSubmenuOpen && (
                  <ul className={headerStyles.submenu}>
                    {navLink.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          style={{ /* ... styles ... */ }}
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
                style={{ /* ... styles ... */ }}
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