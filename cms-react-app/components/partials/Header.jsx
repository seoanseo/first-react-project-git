// Import Island primitive from pre-built HubSpot CMS React components
import { Island } from "@hubspot/cms-components";

// Import MenuBar component from the islands directory
import MenuModule from "../modules/MenuModule";

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

function Header(props,{
  brandColor = {
    opacity: 100,
    color: '#FF7A59',
  },
  text = `This took forever!`,

}) {
 
  return (
    <Layout>
    <header className={headerStyles.header}>
      <h1>{text}  {props.hublData}</h1>
      
          </header>
          </Layout>
  );
}

export const hublDataTemplate = `
  {% module "the_menu" path="@projects/cms-react-project/cms-react-app/components/modules/MenuModule" %}
  {% set hublData = "Hello from HubL!" %}
`;

export default Header;

