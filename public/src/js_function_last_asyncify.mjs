import {object_property_set} from './object_property_set.mjs';
import {object_property_get} from './object_property_get.mjs';
import {js_stack_last_multiple} from './js_stack_last_multiple.mjs';
import {js_types_function} from './js_types_function.mjs';
export function js_function_last_asyncify(stack, async_is) {
  let types = js_types_function();
  let f = js_stack_last_multiple(stack, types);
  let property_name = "async";
  let async = object_property_get(f, property_name);
  if (async_is && !async) {
    object_property_set(f, property_name, true);
  }
}
