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
                
            />
           <LinkField
      name="link_field"
      label="Link"
      required={false}
      locked={false}
      supportedTypes={[
        'EXTERNAL',
        'CONTENT',
        'FILE',
        'EMAIL_ADDRESS',
        'BLOG',
        'CALL_TO_ACTION',
        'PHONE_NUMBER',
        'WHATSAPP_NUMBER',
        'PAYMENT',
      ]}
      showAdvancedRelOptions={true}
      default={{
        url: {
          content_id: null,
          type: 'EXTERNAL',
          href: '',
        },
        open_in_new_tab: false,
        no_follow: false,
      }}
    />
     <BooleanField
                name="show_submenu"
                label="Show Submenu"
                description="Whether to show the submenu or not."
                display="toggle"
            />
      <RepeatedFieldGroup 
            name="sub_menu_items"
            label="Sub Menu Items"
            visibility={{
              controlling_field: 'show_submenu',
              controlling_field_operator: 'EQUAL_TO',
              controlling_field_value: true,
          }}
            occurrence={{
                min: 0,
                max: 500,
              
            }
            }>
            <TextField
                name="text"
                label="Link Text"
                description="The text to display in the header."
                
            />
            <BooleanField
                name="show_submenu"
                label="Show Submenu"
                description="Whether to show the submenu or not."
            />
            <LinkField
      name="link_field"
      label="Link"
      required={false}
      locked={false}
      supportedTypes={[
        'EXTERNAL',
        'CONTENT',
        'FILE',
        'EMAIL_ADDRESS',
        'BLOG',
        'CALL_TO_ACTION',
        'PHONE_NUMBER',
        'WHATSAPP_NUMBER',
        'PAYMENT',
      ]}
      showAdvancedRelOptions={true}
      default={{
        url: {
          content_id: null,
          type: 'EXTERNAL',
          href: '',
        },
        open_in_new_tab: false,
        no_follow: false,
      }}
    />
        </RepeatedFieldGroup>  
        </RepeatedFieldGroup>    
        </ModuleFields>
        
        );