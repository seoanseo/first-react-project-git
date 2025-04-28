import {
    ModuleFields,
    RepeatedFieldGroup,
    ImageField,
    ChoiceField,
    LinkField,
    RichTextField,
    TextField,
    BooleanField,
    FieldGroup,
  } from "@hubspot/cms-components/fields";
  
  export const fields = (
    <ModuleFields>
      <FieldGroup
        name="logo_settings"
        label="Logo Settings!!"
        /* required={false} */
        /* locked={false} */
      >
        <ImageField
          name="logo_image"
          label="Logo Image"
          /* required={false} */
          /* locked={false} */
          inlineHelpText="Assign the white logo in Png" 
          /* responsive={true} */
          /* resizable={true} */
        />
        <LinkField
          name="logo_link"
          label="Logo Link"
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
          /* required={false} */
          /* locked={false} */
          /* inlineHelpText="if no url is indicated, the logo will no longer be displayed as a link in the browser" */
          /* supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} */
          /* showAdvancedRelOptions={false} */
        />
      </FieldGroup>
  
      <FieldGroup
        name="main_button_settings"
        label="Main Button"
        /* required={false} */
        /* locked={false} */
      >
        <TextField
          name="main_button_label"
          label="Main Button Label"
          /* required={false} */
          /* locked={false} */
          default="Book a demo"
        />
        <LinkField
          name="main_button_link"
          label="Main Button Link"
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
          /* required={false} */
          /* locked={false} */
          /* supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} */
          /* showAdvancedRelOptions={false} */
        />
      </FieldGroup>
  
      <RepeatedFieldGroup
        name="main_menu_items"
        label="Main Menu Items"
        /* required={false} */
        /* locked={false} */
       /*  occurrence={{ 
         min: null, 
          max: null, 
         sortingLabelField: 'main_item_label', 
         default: null, 
         }}  */
      >
        <TextField
          name="main_item_label"
          label="Main Menu Label"
          /* required={false} */
          /* locked={false} */
        />
        <ChoiceField
          name="main_item_type"
          label="Main Item Type ?"
          /* required={false} */
          /* locked={false} */
           display="select"
      choices={[
        ['img--left', 'Image Left - Text Right'],
        ['img--right', 'Text Left - Image Right'],
      ]}
        />
        <LinkField
          name="main_item_link"
          label="Main Item Link"
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
          /* required={false} */
          /* locked={false} */
          /*  visibility={{ 
            controlling_field: 'main_item_type', 
            controlling_field_path: null, 
             controlling_value_regex: 'link', 
             operator: 'EQUAL', 
           }} 
           supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} 
           showAdvancedRelOptions={false}  */
        />
        /* Handling the 'dropdown' part would likely involve another FieldGroup or RepeatedFieldGroup here, */
        /* and the complex nested structure might be better managed in the HubL template. */
        <FieldGroup
          name="dropdown_settings"
          label="Dropdown Settings"
          /* required={false} */
          /* locked={false} */
          /* visibility={{ */
          /*   controlling_field: 'main_item_type', */
          /*   controlling_field_path: null, */
          /*   controlling_value_regex: 'dropdown', */
          /*   operator: 'EQUAL', */
          /* }} */
        >
          <FieldGroup
            name="left_column"
            label="Left Column Settings"
            /* required={false} */
            /* locked={false} */
          >
            <BooleanField
              name="show_slider"
              label="Toggle on/off the left slider ?"
              /* inlineHelpText="( checked = on )" */
              /* default={false} */
            />
            <TextField
              name="left_title"
              label="Left Content Title"
              /* visibility={{ */
              /*   controlling_field: 'show_slider', */
              /*   controlling_field_path: null, */
              /*   controlling_value_regex: 'false', */
              /*   operator: 'EQUAL', */
              /* }} */
              /* inlineHelpText="This content won't appear if at least one slide is generated for the slider" */
            />
            <RichTextField
              name="left_content"
              label="Left Text Content"
              /* visibility={{ */
              /*   controlling_field: 'show_slider', */
              /*   controlling_field_path: null, */
              /*   controlling_value_regex: 'false', */
              /*   operator: 'EQUAL', */
              /* }} */
              /* inlineHelpText="This content won't appear if at least one slide is generated for the slider" */
            />
            /* The 'slide_batch' with its nested choices and visibility rules is quite complex */
            /* and might be best handled with a RepeatedFieldGroup and conditional logic in HubL. */
            <RepeatedFieldGroup
              name="slide_batch"
              label="Slides Batch"
              /* inlineHelpText="Create here a batch of slides from blog resources or create them from scratch" */
            >
              <ChoiceField
                name="batch_type"
                label="Batch Type"
                /* choices={[ */
                /*   { value: 'blog', label: 'Blog generated batch' }, */
                /*   { value: 'homemade', label: 'Homemade generated slide' }, */
                /* ]} */
                /* default="blog" */
              />
              /* ... more fields based on 'batch_type' and 'slide_type' would go here ... */
            </RepeatedFieldGroup>
            <LinkField
              name="left_cta_link"
              label="CTA Link"
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
              /* required={false} */
              /* locked={false} */
              /* supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} */
              /* showAdvancedRelOptions={false} */
            />
            <TextField
              name="left_cta_label"
              label="CTA Label"
              /* required={false} */
              /* locked={false} */
            />
          </FieldGroup>
  
          <FieldGroup
            name="main_column"
            label="Main Column Settings"
            /* required={false} */
            /* locked={false} */
          >
            <ChoiceField
              name="main_column_type"
              label="Main Column Type"
              /* required={false} */
              /* locked={false} */
              /* choices={[ */
              /*   { value: 'descriptive', label: 'Descriptive items' }, */
              /*   { value: 'regular', label: 'Regular items' }, */
              /* ]} */
              /* default="regular" */
            />
            <RepeatedFieldGroup
              name="sub_links"
              label="Sub Links"
              /* required={false} *//* locked={false} */
          /* occurrence={{ */
          /*   min: null, */
          /*   max: null, */
          /*   sortingLabelField: 'sub_title', */
          /*   default: null, */
          /* }} */
          >
            <TextField name="sub_title" label="Sub Title"
            /* required={false} */
            /* locked={false} */
            />
            <TextField
              name="sub_description"
              label="Sub Description"
              /* required={false} */
              /* locked={false} */
              /* inlineHelpText="The description will not be taken into account if the type of the main column is set to 'Descriptive items'" */
            />
            <ImageField name="sub_picto" label="Sub Picto"
            /* required={false} */
            /* locked={false} */
            /* responsive={true} */
            /* resizable={true} */
            />
            <LinkField name="sub_link" label="Sub Link"
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
            /* required={false} */
            /* locked={false} */
            /* supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} */
            /* showAdvancedRelOptions={false} */
            />
          </RepeatedFieldGroup>
          </FieldGroup>
  
          <FieldGroup
            name="right_column"
            label="Right Column Settings"
            /* required={false} */
            /* locked={false} */
          >
            <BooleanField name="hide_right_column" label="Hide the right column ?"
            /* required={false} */
            /* locked={false} */
            /* default={false} */
            />
            <BooleanField name="borderless_right_column" label="Borderless right column ?"
            /* required={false} */
            /* locked={false} */
            /* default={false} */
            />
            <RichTextField name="right_content" label="Right Content"
            /* required={false} */
            /* locked={false} */
            />
            <RepeatedFieldGroup
              name="right_list_items"
              label="Right Listing"
              /* required={false} */
              /* locked={false} */
              /* occurrence={{ */
              /*   min: null, */
              /*   max: null, */
              /*   sortingLabelField: 'list_item_text', */
              /*   default: null, */
              /* }} */
            >
              <TextField name="list_item_text" label="List Item"
              /* required={false} */
              /* locked={false} */
              />
              <LinkField name="list_item_link" label="List Item Link" 
  default={{
    url: {
        content_id: null,
        type: 'EXTERNAL',
        href: '',
    },
    open_in_new_tab: false,
    no_follow: false,
}}
              /* required={false} */
              /* locked={false} */
              /* supportedTypes={["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"]} */
              /* showAdvancedRelOptions={false} */
              />
            </RepeatedFieldGroup>
          </FieldGroup>
        </FieldGroup>
      </RepeatedFieldGroup>
    </ModuleFields>
  );