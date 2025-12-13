import { each } from "../../../love/public/src/each.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { list_last_not_is } from "../../../love/public/src/list_last_not_is.mjs";
import { js_code_comma } from "../../../love/public/src/js_code_comma.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
export function app_a_nodes_list(a, nodes, parent) {
  function lambda(arg) {
    app_a_function_node_child(a, arg);
    let c = js_code_comma();
    let n = list_last_not_is(nodes, arg);
    if (n) {
      let span = html_span_text(parent, c);
      html_span_space(parent);
    }
  }
  each(nodes, lambda);
}
