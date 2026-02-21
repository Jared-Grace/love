import { js_marker_is } from "../../../love/public/src/js_marker_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_markers(ast) {
  let visitors = js_list_type(ast, "CallExpression");
  let markers = list_filter(visitors, js_marker_is);
  return markers;
}
