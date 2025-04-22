// Import the pre-built module fields
import {
    RepeatedFieldGroup,
    ModuleFields,
    BooleanField,
    TextField,
    LinkField,
    } from "@hubspot/cms-components/fields";

    export const fields = (
        <ModuleFields>
            <RepeatedFieldGroup 
            name="menu_items"
            label="Menu Items"
            occurrence={{
                min: 1,
                max: 500,
                default: 2,
            }}>
            <TextField
                name="text"
                label="Link Text"
                description="The text to display in the header."
                default="Home"
            />
            <BooleanField
                name="show_submenu"
                label="Show Submenu"
                description="Whether to show the submenu or not."
            />
            <LinkField
                name="link"
                label="Link"
                description="The menu to display."
                default={{ 
                    href: "https://seoanseo.ca",
                    label: "Home",
                }}
            /> 
            
            </RepeatedFieldGroup>    
        </ModuleFields>
        
        );