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
            }}
            default={[
                {
                    text: "Home",
                    show_submenu: false,
                    link: {
                        href: "/cms-react-home",
                        label: "Home",
                    },
                },
                {
                    text: "Cars!",
                    show_submenu: true,
                    link: {
                        href: "/cms-react-cars",
                        label: "Cars!",
                    },
                },
            ]}>
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
                required={true}
            /> 
            if (item.show_submenu && item.sub_menu_items) {   
            <RepeatedFieldGroup 
            name="sub_menu_items"
            label="Sub Menu Items"
            occurrence={{
                min: 1,
                max: 500,
                default: 2,
            }}
            default={[
                {
                    text: "Home",
                    show_submenu: false,
                    link: {
                        href: "/cms-react-home",
                        label: "Home",
                    },
                },
                {
                    text: "Cars!",
                    show_submenu: false,
                    link: {
                        href: "/cms-react-cars",
                        label: "Cars!",
                    },
                },
            ]}>
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
                required={true}
            />   
            </RepeatedFieldGroup> }
            </RepeatedFieldGroup>    
        </ModuleFields>
        
        );