import { string_is_assert_json } from "./string_is_assert_json.mjs";
import { string_is_assert_message } from "./string_is_assert_message.mjs";
import { assert_message } from "./assert_message.mjs";
import { json_to } from "./json_to.mjs";
export function string_includes(string, item) {
  let v = string.includes(item);
  return v;
  const o = {
    string,
    item,
  };
  string_is_assert_json(o);
}
