import { function_parse_declaration_generic } from "../../../love/public/src/function_parse_declaration_generic.mjs";
export async function function_parse_declaration_unalised(f_name) {
  let fn_parse = function_parse_unalised;
  let parsed = await function_parse_declaration_generic(fn_parse, f_name);
  return parsed;
}
