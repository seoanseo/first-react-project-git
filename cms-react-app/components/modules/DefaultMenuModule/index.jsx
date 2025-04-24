// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';


export function Component(props) {
    const menuArray = props.hublData.the_chosen_one;

    const updatedMenuArray = menuArray.map(item => {
      const { label, children, ...rest } = item;
      const newItem = { text: label, sub_menu_items: children, ...rest };
    
      if (newItem.sub_menu_items && newItem.sub_menu_items.length > 0) {
        newItem.show_submenu = true;
        newItem.sub_menu_items = newItem.sub_menu_items.map(child => {
          const { label: childLabel, ...childRest } = child;
          return { text: childLabel, ...childRest };
        });
      }
    
      delete newItem.sub_menu_items; // Remove the original 'children' if it exists
      return newItem;
    });
    return <Layout addClass="added_class">
      {PrettyPrint(updatedMenuArray)}
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
      "the_chosen_one": menu(173898566774, "site_root").children,
      "echo": "echoed"
    }
  %}`;