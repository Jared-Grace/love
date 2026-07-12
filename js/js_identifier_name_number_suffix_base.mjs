import { text_regex_match } from "./text_regex_match.mjs";
export function js_identifier_name_number_suffix_base(name) {
  let m = text_regex_match(name, /^(.*[^0-9])([1-9][0-9]*)$/);
  if (m === null) {
    return null;
  }
  return m[1];
}
