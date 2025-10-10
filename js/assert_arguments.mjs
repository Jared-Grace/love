import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function assert_arguments(args, count) {
  let length = object_property_get(args, "length");
  equal_assert(length, count);
}
