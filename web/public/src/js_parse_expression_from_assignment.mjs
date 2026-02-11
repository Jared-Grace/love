import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declare_single } from "../../../love/public/src/js_declare_single.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
export function js_parse_expression_from_assignment(json) {
  let code_assign = js_code_let_assign("a", json);
  let statement = js_parse_statement(code_assign);
  let d = js_declare_single(statement);
  let init = property_get(d, "init");
  return init;
}
