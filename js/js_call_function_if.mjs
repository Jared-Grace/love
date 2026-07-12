import { js_identifier_is } from "./js_identifier_is.mjs";
import { property_get } from "./property_get.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
export async function js_call_function_if(node, lambda$name) {
  "calls a lambda if the function name is a valid function";
  let callee = property_get(node, "callee");
  if (js_identifier_is(callee)) {
    let name = property_get(callee, "name");
    let valid = await functions_names_includes(name);
    if (valid) {
      await lambda$name(name);
    }
  }
}
