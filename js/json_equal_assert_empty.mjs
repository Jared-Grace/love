import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
export function json_equal_assert_empty(fn_object) {
  json_equal_assert_json(fn_object, {}, {
    hint: "the object should be empty",
  });
}
