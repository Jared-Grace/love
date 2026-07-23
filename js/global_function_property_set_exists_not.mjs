import { global_function_property_exists_not } from "./global_function_property_exists_not.mjs";
import { assert_message } from "./assert_message.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function global_function_property_set_exists_not(
  fn,
  property_name,
  value,
) {
  let b = global_function_property_exists_not(fn, property_name);
  assert_message(
    b,
    "This property is already set on the function. Did you mean to overwrite it, or is a fresh name expected?",
  );
  let v = global_function_property_set(fn, property_name, value);
  return v;
}
