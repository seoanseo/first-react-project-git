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
                 <FieldGroup name="level_5" label="Level 5">
              <TextField name="text_level_5" label="Text Level 5" />
              <FieldGroup name="level_6" label="Level 6">
                <TextField name="text_level_6" label="Text Level 6" />
                <FieldGroup name="level_7" label="Level 7">
                  <TextField name="text_level_7" label="Text Level 7" />
                  <FieldGroup name="level_8" label="Level 8">
                    <TextField name="text_level_8" label="Text Level 8" />
                    <FieldGroup name="level_9" label="Level 9">
                      <TextField name="text_level_9" label="Text Level 9" />
                      <FieldGroup name="level_10" label="Level 10">
                        <TextField name="text_level_10" label="Text Level 10" />
                        <FieldGroup name="level_11" label="Level 11">
                          <TextField name="text_level_11" label="Text Level 11" />
                          <FieldGroup name="level_12" label="Level 12">
                            <TextField name="text_level_12" label="Text Level 12" />
                            <FieldGroup name="level_13" label="Level 13">
                              <TextField name="text_level_13" label="Text Level 13" />
                              <FieldGroup name="level_14" label="Level 14">
                                <TextField name="text_level_14" label="Text Level 14" />
                                <FieldGroup name="level_15" label="Level 15">
                                  <TextField name="text_level_15" label="Text Level 15" />
                                </FieldGroup>
                              </FieldGroup>
                            </FieldGroup>
                          </FieldGroup>
                        </FieldGroup>
                      </FieldGroup>
                    </FieldGroup>
                  </FieldGroup>
                </FieldGroup>
              </FieldGroup>
            </FieldGroup>
            </FieldGroup>
          </FieldGroup>
        </FieldGroup>
      </FieldGroup>
    </ModuleFields>
  );