import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { function_parameter_call_sizes } from "./function_parameter_call_sizes.mjs";
export async function js_function_forwarding_removed_sizes(callee, site) {
  arguments_assert(arguments, 2);
  let receiver = property_get(callee, "name");
  let index = property_get(site, "index");
  let sizes = await function_parameter_call_sizes(receiver, index);
  return sizes;
}
