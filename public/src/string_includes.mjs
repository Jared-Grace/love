import { string_is_assert_json } from "../../../love/public/src/string_is_assert_json.mjs";
export function string_includes(string, part) {
  const o = {
    string,
    part,
  };
  string_is_assert_json(string, o);
  string_is_assert_json(part, o);
  let v = string.includes(part);
  return v;
}
