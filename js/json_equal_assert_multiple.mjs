import { each } from "./each.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
export function json_equal_assert_multiple(expected, list) {
  function lambda(item) {
    json_equal_assert_json(item, expected, {
      hint: "every item in the list should equal the expected value",
    });
  }
  each(list, lambda);
}
