import {
    ModuleFields,
    TextField,
    FieldGroup,
  } from "@hubspot/cms-components/fields";
  
  export const fields = (
    <ModuleFields>
      <FieldGroup name="level_1" label="Level 1">
        <TextField name="text_level_1" label="Text Level 1" />
        <FieldGroup name="level_2" label="Level 2">
          <TextField name="text_level_2" label="Text Level 2" />
          <FieldGroup name="level_3" label="Level 3">
            <TextField name="text_level_3" label="Text Level 3" />
            <FieldGroup name="level_4" label="Level 4">
              <TextField name="text_level_4" label="Text Level 4" />
              </FieldGroup>
          </FieldGroup>
        </FieldGroup>
      </FieldGroup>
    </ModuleFields>
  );