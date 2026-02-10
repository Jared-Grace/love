import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function js_declaration(declaration, fn_name) {
  let async_is = property_get(declaration, "async");
  let code = js_code_declaration(fn_name, "", async_is);
  let declaration_lambda = js_parse_statement_module(code);
  return declaration_lambda;
}
