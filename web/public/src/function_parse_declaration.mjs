import { marker } from "../../../love/public/src/marker.mjs";
import { function_parse_declaration_generic } from "../../../love/public/src/function_parse_declaration_generic.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
export async function function_parse_declaration(f_name) {
  marker("1");
  let fn_parse = function_parse;
  let parsed = await function_parse_declaration_generic(fn_parse, f_name);
  return parsed;
}
