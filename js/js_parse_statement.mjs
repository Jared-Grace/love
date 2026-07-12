import { property_get } from "./property_get.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
export function js_parse_statement(code) {
  let code_d = js_code_function_declaration("a", code, true);
  let r = js_parse(code_d);
  let body = property_get(r, "body");
  let f = list_first(body);
  let block = property_get(f, "body");
  let statements = property_get(block, "body");
  let statement = list_first(statements);
  return statement;
}
