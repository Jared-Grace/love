import { undefined_not_is_assert } from "./undefined_not_is_assert.mjs";
import { global_get } from "./global_get.mjs";
import { property_set } from "./property_set.mjs";
export function global_function_set(fn, value) {
  undefined_not_is_assert(value);
  let global = global_get();
  property_set(global, fn.name, value);
}
