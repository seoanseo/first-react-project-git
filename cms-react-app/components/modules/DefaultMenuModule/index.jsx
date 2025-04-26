// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';


export function Component(props) {
    const menuArray = props.hublData.the_chosen_one;

    const transformMenuItem = (item) => {
      const { label, children, url, ...rest } = item;
      const newItem = { text: label, ...rest };
    
      if (url) {
        newItem.link_field = { url: { href: url } };
      }
    
      if (children && children.length > 0) {
        newItem.show_submenu = true;
        newItem.children = children.map(transformMenuItem); // Recursively transform children
      }
    
      delete newItem.url; // Remove the original 'url'
      return newItem;
    };
    
    const updatedMenuArray = menuArray.map(transformMenuItem);

    return <Layout addClass="added_class">
      
                             <Island module={MenuBar}  navLinks={updatedMenuArray}  hydrateOn="idle"/>
            </Layout>;
}

export default Component;
export { fields } from './fields.jsx';

export const meta = {
    label: `The Default Menu Module`,
    global : false,
   
}

export const hublDataTemplate = `
{% set hublData = {
      "the_chosen_one": menu(module.chosen_menu, "site_root").children,
      "echo": "echoed"
    }
  %}`;