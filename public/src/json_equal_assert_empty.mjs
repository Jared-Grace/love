import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
export function json_equal_assert_empty(fn_object) {
  json_equal_assert(fn_object, {});
}
