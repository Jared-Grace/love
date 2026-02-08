import { string_is_assert_message } from "../../../love/public/src/string_is_assert_message.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function text_is_assert_json(value, o) {
  let message = json_to(o);
  string_is_assert_message(value, message);
}
