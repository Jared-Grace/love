import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export async function js_call_function_if(node, lambda$name) {
  let { callee } = node;
  if (js_node_type_is(callee, "Identifier")) {
    let { name } = callee;
    const valid = functions_names_includes(name);
    if (valid) {
      await lambda$name(name);
    }
  }
}
