import { equal_assert_json } from "./equal_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function arguments_assert(args, count) {
  let length = property_get(args, "length");
  equal_assert_json(length, count, {
    hint: "this function was called with a different number of arguments than it expects — check the call site's argument count",
  });
}
