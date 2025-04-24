// Import stylesheet
import headerStyles from '../../../styles/header.module.css';


import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';


export function Component(props) {
    
    return <Layout addClass="added_class">
                 {props.menu}
                  </Layout>;
}

export default Component;
export { fields } from './fields.jsx';

export const meta = {
    label: `The Default Menu Module`,
    global : true,
   
}

export const hublDataTemplate = `
{% set hublData = {
      "the_chosen_one": menu(module.chosen_menu, "site_root").children,
      "blogAllPostsUrl": blog_all_posts_url(blogId)
    }
  %}`;