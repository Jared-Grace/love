import { log } from "./log.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_parse_declaration_js_unparse(f_name) {
  "todo rename remove js";
  let { declaration } = await function_parse_declaration(f_name);
  let properties = object_properties(declaration);
  console.log(properties);
  let output = await js_unparse(declaration);
  return output;
}
