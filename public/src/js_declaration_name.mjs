import { object_property_get } from "./object_property_get.mjs";
export function js_declaration_name(declaration) {
  let declaration_id = object_property_get(declaration, "id");
  let name = object_property_get(declaration_id, "name");
  return name;
}
