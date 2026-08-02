import { property_list_first } from "./property_list_first.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_parse_statement(code) {
  let code_d = js_code_function_declaration("a", code, true);
  let r = js_parse(code_d);
  let body = property_get(r, "body");
  let block = list_first_property(body, "body");
  let statement = property_list_first(block, "body");
  return statement;
}
