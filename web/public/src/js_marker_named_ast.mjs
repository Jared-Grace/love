import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_marker_named } from "../../../love/public/src/js_marker_named.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_marker_named_ast(ast, m_name_from) {
  let visitors = js_list_type(ast, "CallExpression");
  function lambda(v) {
    let result = js_marker_named(v, m_name_from);
    return result;
  }
  let filtered = list_filter(visitors, lambda);
  let marker_v = list_single(filtered);
  return marker_v;
}
