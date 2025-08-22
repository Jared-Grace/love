import { not } from "./not.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_function_last_asyncify(stack, async_is) {
  let f = js_stack_last_function(stack);
  let property_name = "async";
  let async = object_property_get(f, property_name);
  if (async_is && not(async)) {
    object_property_set(f, property_name, true);
  }
}
