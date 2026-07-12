import { js_unparse } from "./js_unparse.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { properties_get } from "./properties_get.mjs";
export async function function_parse_declaration_js_unparse(f_name) {
  "todo rename remove js";
  let { declaration } = await function_parse_declaration(f_name);
  let properties = properties_get(declaration);
  let output = js_unparse(declaration);
  return output;
}
