import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function global_function_set(fn, value) {
  undefined_not_is_assert(value);
  let global = global_get();
  property_set(global, fn.name, value);
}
