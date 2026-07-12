import { each } from "./each.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
export function text_is_assert_multiple(items) {
  function lambda(item) {
    text_is_assert_json(item, {
      item,
    });
  }
  each(items, lambda);
}
