import { property_path_get_2 } from "./property_path_get_2.mjs";
export function js_function_declaration_name(declaration) {
  let name = property_path_get_2(declaration, "id", "name");
  return name;
}
