// Import Island primitive from pre-built HubSpot CMS React components
import { Island } from "@hubspot/cms-components";

// Import MenuBar component from the islands directory
import MenuBar from "../islands/MenuBar.jsx?island";

// Import layout component
import Layout from '../../Layout.jsx';


// Export the MenuModule Component
export const Component = ({ fieldValues }) => {
    // Constants for the fieldValues and hublParameters
    const pickedMenu = fieldValues.picked_menu; // Access the picked_menu value
    
    // Return the TeamModule component
    return (
        <Layout>
           <Island module={MenuBar} navLinks={pickedMenu} />
              </Layout>
      );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}