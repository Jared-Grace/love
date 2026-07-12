import { text_is_assert_message_get } from "./text_is_assert_message_get.mjs";
import { json_to } from "./json_to.mjs";
export function text_is_assert_json(value, o) {
  function lambda() {
    let message = json_to(o);
    return message;
  }
  text_is_assert_message_get(value, lambda);
}
