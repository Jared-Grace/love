import { marker } from "../../../love/public/src/marker.mjs";
import { function_new_declaration } from "../../../love/public/src/function_new_declaration.mjs";
import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
export async function function_new(f_name) {
  marker("1");
  const code_declaration = js_code_declaration(f_name, "", false);
  let declaration = js_parse_statement_module(code_declaration);
  await function_new_declaration(declaration);
  await function_open(f_name);
}
