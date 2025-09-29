import { string_is_assert_json } from "../../../love/public/src/string_is_assert_json.mjs";
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
