import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { js_html_style_assign_to_set_node } from "./js_html_style_assign_to_set_node.mjs";
export function js_html_style_assign_to_set(ast) {
  let f_name = html_style_assign.name;
  js_visit_calls_named_nodes(ast, f_name, js_html_style_assign_to_set_node);
}
