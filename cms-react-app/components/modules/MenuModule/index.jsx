import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import Layout from '../../Layout.jsx';

export function Component({ fieldValues, hublParameters = {} }) {
    const pickedMenuId = fieldValues.picked_menu; // Rename to pickedMenuId

    //  Hardcoded brandColor for now (replace with a HubSpot field if needed)
    const brandColor = {
        color: "#007bff",
        opacity: 100,
    };

 
   
    return (
        <Layout>
            <Island module={MenuBar} navLinks={pickedMenuId} brandColor={brandColor} />
        </Layout>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}