import { equal_assert } from "./equal_assert.mjs";
import { property_get } from "./property_get.mjs";
export function arguments_assert(args, count) {
  let length = property_get(args, "length");
  equal_assert(length, count);
}
