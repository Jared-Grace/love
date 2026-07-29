import { fn_name } from "./fn_name.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { js_html_style_assign_to_set_node } from "./js_html_style_assign_to_set_node.mjs";
export function js_html_style_assign_to_set(ast) {
  let f_name = fn_name("html_style_assign");
  js_visit_calls_named_nodes(ast, f_name, js_html_style_assign_to_set_node);
}
