import { string_is_assert_message } from "./string_is_assert_message.mjs";
import { assert_message } from "./assert_message.mjs";
import { json_to } from "./json_to.mjs";
export function string_includes(string, item) {
  let v = string.includes(item);
  return v;
  let message = json_to({
    string,
    item,
  });
  let v2 = string_is_assert_message(value, message);
}
