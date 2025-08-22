import { string_is_assert_message } from "./string_is_assert_message.mjs";
import { json_to } from "./json_to.mjs";
export function string_is_assert_json(value, o) {
  let message = json_to(o);
  string_is_assert_message(value, message);
}
