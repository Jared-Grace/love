import { function_parse_declaration_generic } from "../../../love/public/src/function_parse_declaration_generic.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_parse_declaration_unaliased(f_name) {
  let fn_parse = function_parse_unaliased;
  let parsed = await function_parse_declaration_generic(fn_parse, f_name);
  return parsed;
}
