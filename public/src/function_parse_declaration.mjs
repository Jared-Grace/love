import { function_parse_imports_packages } from "../../../love/public/src/function_parse_imports_packages.mjs";
import { function_parse_declaration_inner } from "../../../love/public/src/function_parse_declaration_inner.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
export async function function_parse_declaration(f_name) {
  let parsed = await function_parse(f_name);
  let to2 = function_parse_declaration_inner(parsed);
  let to = function_parse_imports_packages(to2);
  return to;
}
