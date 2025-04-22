// Import Island primitive from pre-built HubSpot CMS React components
import { Island } from "@hubspot/cms-components";

// Import MenuBar component from the islands directory
import MenuBar from "../islands/MenuBar.jsx?island";

// Import layout component
import Layout from "../Layout.jsx";




const navLinks = [
  {
    href: '/cms-react-home',
    label: 'Home',
    submenu: [
      {
        href: '/cms-react-cars/sedans',
        label: 'Sub Home',
      }
    ]
  },
  {
    label: 'Cars!!!!',
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

import headerStyles from '../../styles/header.module.css';

function Header({
  brandColor = {
    opacity: 100,
    color: '#FF7A59',
  },
  text = `This took forever!`,
}) {
 
  return (
    <Layout>
    <header className={headerStyles.header}>
      <h1>{text}</h1>
       <Island module={MenuBar} navLinks={navLinks} brandColor={brandColor} />
     
          </header>
          </Layout>
  );
}

export default Header;