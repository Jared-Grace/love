import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function assert_arguments(args, count) {
  let length = property_get(args, "length");
  equal_assert(length, count);
}
