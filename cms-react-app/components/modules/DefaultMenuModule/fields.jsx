import {
ModuleFields,
MenuField 
} from "@hubspot/cms-components/fields";

export const fields = (
  <ModuleFields>
    <MenuField
      name="chosen_menu"
      label="Choosen Menu"
      required={false}
      locked={false}
      default={173898566774}
    />
  </ModuleFields>
);