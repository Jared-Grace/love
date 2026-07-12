import { property_get } from "./property_get.mjs";
export function js_function_declaration_params_get(declaration) {
  let params = property_get(declaration, "params");
  return params;
}
