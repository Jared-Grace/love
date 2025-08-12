import { js_marker_is } from "./js_marker_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_type } from "./js_type.mjs";
export function js_markers(ast) {
  let visitors = js_type(ast, "CallExpression");
  let markers = list_filter(visitors, js_marker_is);
  return markers;
}
