// Import layout component
import Layout from '../../Layout.jsx';
import PPrint from '../../PrettyPrint.jsx';

import { Island } from "@hubspot/cms-components";

import Team from "../../islands/Team.jsx?island";


// Import stylesheet
import styles from "../../../styles/team.module.css";

/**
 * Here we are exporting the 3 requirements of a module: Component, fields, and meta
 *
 * 'props' contains the resolved values from the defined module fields (./fields.jsx)
 * This will be the value provided by a content editor in the page editor, or will fallback to the defined default value
 *
 */


// Export the TeamModule Component
export const Component = (props, fieldValues, hublParameters = {} ) => {
    // Constants for the fieldValues and hublParameters
    const { team_members: teamMembers } = props;
    const { title } = hublParameters;
    
    // Return the TeamModule component
    return (
        <Layout addClass="content-wrapper">
        <h1> {props.hublData} {title || 'Our Team'}</h1>
<Island module={Team}  wrapperTag="div" wrapperClassName={styles.team} theMembers={teamMembers} styles={styles} hydrateOn="idle"/>
        </Layout>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `Team Module`,
}

export const hublDataTemplate = `{% set hublData = "Hello from HubL!" %}`;