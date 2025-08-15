import { js_declare_assign } from "./js_declare_assign.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_keyword_null } from "./js_keyword_null.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_declare_assign_null(ast) {
  js_declare_assign(ast, lambda);
  function lambda() {
    let init_code = js_keyword_null();
    let value = js_parse_expression(init_code);
    return value;
  }
}
