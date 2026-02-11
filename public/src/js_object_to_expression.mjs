import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declare_single } from "../../../love/public/src/js_declare_single.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function js_object_to_expression(object) {
  let json = json_to(object);
  let code_assign = js_code_let_assign("a", json);
  let statement = js_parse_statement(code_assign);
  let d = js_declare_single(statement);
  let init = property_get(d, "init");
  return init;
}
