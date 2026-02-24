import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_is_return } from "../../../love/public/src/js_node_is_return.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export async function js_return_on_async(node, identifier_if, identifier_not) {
  if (js_node_is_return(node)) {
    let argument = property_get(node, "argument");
    if (js_node_type_is(argument, "Identifier")) {
      await identifier_if(argument);
    } else {
      await identifier_not(argument);
    }
  }
}
