// Import Island primitive from pre-built HubSpot CMS React components
import { Island } from "@hubspot/cms-components";

// Import MenuBar component from the islands directory
import MenuBar from "../../islands/MenuBar.jsx?island";

// Import layout component
import Layout from '../../Layout.jsx';


// Export the MenuModule Component

export function Component({ fieldValues }) {
    const { pickedMenu } = fieldValues;
    return <Island module={MenuBar} navLinks={pickedMenu} />;
  }


// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `The Menu Module`,
    description: `A module that displays a menu bar with links and submenus.`,
}