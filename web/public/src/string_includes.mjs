import { string_is_assert_json } from "../../../love/public/src/string_is_assert_json.mjs";
import { string_is_assert_message } from "../../../love/public/src/string_is_assert_message.mjs";
import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function string_includes(string, item) {
  const o = {
    string,
    item,
  };
  string_is_assert_json(string, o);
  string_is_assert_json(item, o);
  let v = string.includes(item);
  return v;
}
