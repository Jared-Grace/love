import { assert_equal } from "./assert_equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function assert_arguments(args, count) {
  let length = object_property_get(args, "length");
  assert_equal(length, count);
}
