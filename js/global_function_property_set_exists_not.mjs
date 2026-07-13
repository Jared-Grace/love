import { not } from "./not.mjs";
import { assert_message } from "./assert_message.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function global_function_property_set_exists_not(
  fn,
  property_name,
  value,
) {
  let exists = global_function_property_exists(fn, property_name);
  let b = not(exists);
  assert_message(b, "This property is already set on the function. Did you mean to overwrite it, or is a fresh name expected?");
  let v = global_function_property_set(fn, property_name, value);
  return v;
}
