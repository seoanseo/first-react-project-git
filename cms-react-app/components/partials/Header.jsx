import headerStyles from '../../styles/header.module.css';

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
        // Add more submenu items as needed
      ],
    },
  ];

  return (
    <header className={headerStyles.header}>
      <h1>{text}</h1>
      <nav className={headerStyles.nav}>
        {navLinks.map((navLink) => (
          <a
            style={{
              color: brandColor.color,
              borderColor: brandColor.color,
              opacity: brandColor.opacity / 100,
            }}
            key={navLink.label}
            href={navLink.href}
          >
            {navLink.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
