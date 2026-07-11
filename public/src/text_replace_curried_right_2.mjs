import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_replace_curried_right_(from, to) {
  let r = function text_replace_curry_right_result(t) {
    let replaced = text_replace(t, from, to);
    return replaced;
  };
  return r;
}
