import { not } from "../../../love/public/src/not.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
export function global_function_property_set_exists_not(
  fn,
  property_name,
  value,
) {
  let exists = global_function_property_exists(fn, property_name);
  let b = not(exists);
  assert(b);
  let v = global_function_property_set(fn, property_name, value);
  return v;
}
