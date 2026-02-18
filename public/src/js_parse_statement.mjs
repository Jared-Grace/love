import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_code_function_declaration } from "../../../love/public/src/js_code_function_declaration.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_parse_statement(code) {
  let code_d = js_code_function_declaration("a", code, true);
  let r = js_parse(code_d);
  let body = property_get(r, "body");
  let r2 = list_first(body);
  let block = property_get(r2, "body");
  let statements = property_get(block, "body");
  const statement = list_first(statements);
  return statement;
}
