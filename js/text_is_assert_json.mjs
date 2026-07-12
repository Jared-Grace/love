import { text_is_assert_message } from "./text_is_assert_message.mjs";
import { json_to } from "./json_to.mjs";
export function text_is_assert_json(value, o) {
  let message = json_to(o);
  text_is_assert_message(value, message);
}
