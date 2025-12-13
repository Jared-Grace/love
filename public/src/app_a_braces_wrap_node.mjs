import { app_a_braces_wrap } from "../../../love/public/src/app_a_braces_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
export function app_a_braces_wrap_node(a, body2, parent) {
  function lambda20() {
    app_a_function_node_child(a, body2);
  }
  app_a_braces_wrap(parent, lambda20);
}
