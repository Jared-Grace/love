import { function_parse_imports_packages } from "../../../love/public/src/function_parse_imports_packages.mjs";
import { function_parse_declaration_inner } from "../../../love/public/src/function_parse_declaration_inner.mjs";
export async function function_parse_declaration_generic(fn_parse, f_name) {
  let p = await fn_parse(f_name);
  let to = function_parse_declaration_inner(p);
  let parsed = function_parse_imports_packages(to);
  return parsed;
}
