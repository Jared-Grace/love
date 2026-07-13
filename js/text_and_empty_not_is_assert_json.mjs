import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_empty_not_is_assert_json } from "./text_empty_not_is_assert_json.mjs";
export function text_and_empty_not_is_assert_json(name, json) {
  text_is_assert_json(name, json);
  text_empty_not_is_assert_json(name, json);
}
