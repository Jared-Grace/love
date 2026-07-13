import { each } from "./each.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
export function text_is_assert_multiple_json(items, json) {
  function lambda(item) {
    text_is_assert_json(item, {
      item,
      json,
    });
  }
  each(items, lambda);
}
