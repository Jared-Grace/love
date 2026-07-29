import { fn_name } from "./fn_name.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { js_html_style_set_to_helper_node } from "./js_html_style_set_to_helper_node.mjs";
export function js_html_style_set_to_helpers(ast, helpers) {
  "Rewrite every style property set by name in this tree into the named helper for it.";
  let f_name = fn_name("html_style_set");
  function lambda(node) {
    js_html_style_set_to_helper_node(node, helpers);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
}
