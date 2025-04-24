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
      const newItem = { ...item, text: item.label };
      delete newItem.label;
      if (newItem.children && newItem.children.length > 0) {
        newItem.children = newItem.children.map(child => {
          const newChild = { ...child, text: child.label };
          delete newChild.label;
          return newChild;
        });
      }
      return newItem;
    });
    return <Layout addClass="added_class">
                               <Island module={MenuBar}  navLinks={menuArray}  hydrateOn="idle"/>
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