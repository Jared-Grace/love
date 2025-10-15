import { string_includes } from "../../../love/public/src/string_includes.mjs";
export function string_includes_curry_right_get(input) {
  function string_includes_curry_right(part) {
    let i = string_includes(input, part);
    return i;
  }
  return string_includes_curry_right;
}
