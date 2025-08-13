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
  function lambda(v) {
    let { node, stack } = v;
    let { init } = node;
    if (init === null) {
      let stack3 = list_get_end(stack, 3);
      let type_is = js_node_type_is(stack3, "ForOfStatement");
      if (type_is) {
      }
      let init_code = js_keyword_null();
      let value = js_parse_expression(init_code);
      object_property_set(node, "init", value);
    }
  }
  js_visit_type(ast, "VariableDeclarator", lambda);
}
