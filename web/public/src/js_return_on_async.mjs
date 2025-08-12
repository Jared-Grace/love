import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_return_on_async(node, identifier_if, identifier_not) {
  if (js_node_type_is(node, "ReturnStatement")) {
    let { argument } = node;
    if (js_node_type_is(argument, "Identifier")) {
      identifier_if(argument);
    } else {
      identifier_not(argument);
    }
  }
}
