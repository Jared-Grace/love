import { function_parse_strict } from "../../../love/public/src/function_parse_strict.mjs";
import { function_parse_declaration_inner } from "../../../love/public/src/function_parse_declaration_inner.mjs";
export async function function_parse_strict_declaration(f_name) {
  let parsed = await function_parse_strict(f_name);
  let r = function_parse_declaration_inner(parsed);
  return r;
}
