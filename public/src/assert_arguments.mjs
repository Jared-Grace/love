import { equal_assert } from "./equal_assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function assert_arguments(args, count) {
  let length = object_property_get(args, "length");
  equal_assert(length, count);
}
