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
              
            }
            }>
            <TextField
                name="text"
                label="Link Text"
                description="The text to display in the header."
                required={true}
            />
            <BooleanField
                name="show_submenu"
                label="Show Submenu"
                description="Whether to show the submenu or not."
            />
            <LinkField
                name="the_link"
                label="Link"
                description="The menu to display."
                
            /> 
            if (item.show_submenu && item.sub_menu_items) {   
            <RepeatedFieldGroup 
            name="sub_menu_items"
            label="Sub Menu Items"
            occurrence={{
                min: 1,
                max: 500,
                
            }}
            >
            <TextField
                name="text"
                label="Link Text"
                description="The text to display in the header."
                required={true}
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
                />   
            </RepeatedFieldGroup> }
            </RepeatedFieldGroup>    
        </ModuleFields>
        
        );