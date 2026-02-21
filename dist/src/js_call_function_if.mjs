import { property_get } from "../../../love/public/src/property_get.mjs";
import { functions_names_includes } from "../../../love/public/src/functions_names_includes.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export async function js_call_function_if(node, lambda$name) {
  let callee = property_get(node, "callee");
  if (js_node_type_is(callee, "Identifier")) {
    let name = property_get(callee, "name");
    const valid = await functions_names_includes(name);
    if (valid) {
      await lambda$name(name);
    }
  }
}
