import {
ModuleFields,
MenuField 
} from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
    <MenuField
      name="chosen_menu"
      label="Choosen Menu"
      description="Select the menu items to display in the menu."
      required={true}
      defaultValue={[]}
    />
  </ModuleFields>
);