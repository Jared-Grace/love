import { js_return_argument_get } from "../../../love/public/src/js_return_argument_get.mjs";
import { js_node_return_is } from "../../../love/public/src/js_node_return_is.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export async function js_return_on_async(node, identifier_if, identifier_not) {
  if (js_node_return_is(node)) {
    let argument = js_return_argument_get(node, "argument");
    if (js_node_type_is(argument, "Identifier")) {
      await identifier_if(argument);
    } else {
      await identifier_not(argument);
    }
  }
}
