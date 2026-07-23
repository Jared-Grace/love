import { list_find } from "./list_find.mjs";
import { js_marker_named } from "./js_marker_named.mjs";
import { js_list_type } from "./js_list_type.mjs";
export function js_marker_named_ast(ast, m_name_from) {
  let visitors = js_list_type(ast, "CallExpression");
  function lambda(v) {
    let result = js_marker_named(v, m_name_from);
    return result;
  }
  let marker_v = list_find(visitors, lambda);
  return marker_v;
}
