import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function text_includes_curry_right_get(input) {
  function string_includes_curry_right(part) {
    let i = text_includes(input, part);
    return i;
  }
  return string_includes_curry_right;
}
