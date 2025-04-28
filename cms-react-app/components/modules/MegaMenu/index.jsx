// Import stylesheet
import headerStyles from '../../../styles/header.module.css';

import { Island } from "@hubspot/cms-components";
import MegaMenu from "../../islands/MegaMenu.jsx?island";
import BlankIsland from "../../islands/BlankIsland.jsx?island";
import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';

export function Component({ fieldValues = {}, hublParameters = {} }) {
  const brandColor = {
    color: "#007bff",
    opacity: 100,
  };

  const { main_menu_items: menuItems, logo_settings: logoSettings, main_button_settings: mainButtonSettings } = fieldValues;

  return (
    <Layout addClass="added_class">
      <div className={headerStyles.megaMenuContainer}>
        <Island
          module={MegaMenu}
          navLinks={menuItems}
          logoSettings={logoSettings}
          mainButtonSettings={mainButtonSettings}
          brandColor={brandColor}
          hydrateOn="idle"
        />
      </div>
    </Layout>
  );
}

export default Component;
export { fields } from './fields.jsx';

export const meta = {
  label: `Mega Menu (React)`,
  global: true,
};