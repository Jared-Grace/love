import { property_get } from "./property_get.mjs";
export function js_function_declaration_name(declaration) {
  let declaration_id = property_get(declaration, "id");
  let name = property_get(declaration_id, "name");
  return name;
}
