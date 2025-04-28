// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';


export function Component({ fieldValues = {}, hublParameters = {} }) {
     const brandColor = {
        color: "#007bff",
        opacity: 100,
    };



  const { menu_items: menuItems } = fieldValues;

    return <Layout addClass="added_class">
      
                   <Island module={MenuBar}  navLinks={menuItems} brandColor={brandColor} hydrateOn="idle"/>
                </Layout>;}

export default Component;
export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    global : true,
   
}