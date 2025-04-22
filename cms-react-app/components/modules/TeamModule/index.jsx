// Import layout component
import Layout from "../../Layout.jsx";

// Import stylesheet
import styles from "../../../styles/team.module.css";

// Export the TeamModule Component
export const Component = () => {
    // Write React code here
    }
    
    // Re-export the fields from fields.jsx
    export { fields } from "./fields.jsx";
    
    // Export the metadata
    export const meta = {
    label: `Team Module`,
    }

    // Export the TeamModule Component
export const Component = ({ fieldValues, hublParameters = {} }) => {
    // Write React code here
    }

    // Constants for the fieldValues and hublParameters
const { team_members: teamMembers } = fieldValues;
const { title } = hublParameters;

// Return the TeamModule component
return (
    <Layout>
    <h1>{title || "Our Team"}</h1>
    <div className={styles.team}>
    {/* Use the map function to iterate over the teamMembers array */}
    {teamMembers.map((teamMember, index) => (
    <div key={index} className={styles.member}>
    <img src={teamMember.team_member_photo.src} alt={teamMember.team_member_name} height={teamMember.team_member_photo.height} width={teamMember.team_member_photo.width} />
    <h3>{teamMember.team_member_name}</h3>
    </div>
    ))}
    </div>
    </Layout>
    );
    