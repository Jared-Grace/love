import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { global_get } from "./global_get.mjs";
import { property_set } from "./property_set.mjs";
export function global_function_set(fn, value) {
  undefined_not_is_assert_json(value, {
    hint: "the value to store on the global shouldn't be undefined — did it fail to compute?",
  });
  let global = global_get();
  property_set(global, fn.name, value);
}
