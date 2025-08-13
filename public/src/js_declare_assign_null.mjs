import { js_keyword_null } from "./js_keyword_null.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_declare_assign_null(ast) {
  let a = null;
  js_visit_type(ast, "VariableDeclarator", function lambda(v) {
    let { node } = v;
    let { init } = node;
    if (init === null) {
      let init_code = js_keyword_null();
      let value = js_parse_expression(init_code);
      object_property_set(node, "init", value);
    }
  });
}
