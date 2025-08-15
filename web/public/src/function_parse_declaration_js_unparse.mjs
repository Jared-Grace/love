import { js_unparse } from "./js_unparse.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
export async function function_parse_declaration_js_unparse() {
  let { declaration } = await function_parse_declaration(f_name);
  let output = await js_unparse(declaration);
  return output;
}
