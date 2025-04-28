import headerStyles from '../../styles/header.module.css';
import customStyles from '../../styles/custom_menu.module.css';
import { useState, useRef  } from 'react';



function MenuItem({ item, level = 1 }) { // Add a level prop with a default value
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const hasChildren = item.show_submenu && item.children && item.children.length > 0;
  const timeoutRef = useRef(null); // Ref to store the timeout ID
  const handleMouseEnter = () => {
    if (hasChildren) {
      clearTimeout(timeoutRef.current); // Clear any pending close timeout
      setIsSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasChildren) {
      timeoutRef.current = setTimeout(() => {
        setIsSubmenuOpen(false);
      }, 750); // Adjust the delay (in milliseconds) as needed
    }
  };

  return (
    <li
      className={hasChildren ? headerStyles.dropdown : headerStyles.no_dropdown}
      onMouseEnter={hasChildren ? handleMouseEnter : undefined}
      onMouseLeave={hasChildren ? handleMouseLeave : undefined}
    >
      <a
        className={customStyles.menu__link}
        style={{
          color: hasChildren ? 'red' : 'green',
          cursor: 'pointer',
        }}
        href={item.link_field?.url?.href}
      >
        {item.text}
      </a>
      {hasChildren && isSubmenuOpen && (
        <ul className={`${headerStyles.submenu} submenu-level-${level}`} data-level={`${level % 2 === 0 ? 'even' : 'odd'}`}> {/* Add the level as a class */}
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} /> 
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MenuCreator({ navLinks }) {
  return (
    <nav className={customStyles.custom_nav__nav}>
      <ul role="menu" className={`${customStyles.menu__wrapper} ${customStyles['no-list']}`}>
        {navLinks.map((navLink, index) => (
          <div key={index} className={headerStyles.navItem}>
            <MenuItem item={navLink} /> 
          </div>
        ))}
      </ul>
    </nav>
  );
}