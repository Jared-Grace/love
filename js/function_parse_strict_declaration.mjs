import { function_parse } from "./function_parse.mjs";
import { function_parse_declaration_inner } from "./function_parse_declaration_inner.mjs";
export async function function_parse_strict_declaration(f_name) {
  let parsed = await function_parse(f_name);
  let r = function_parse_declaration_inner(parsed);
  return r;
}
