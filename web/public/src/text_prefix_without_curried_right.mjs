import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function text_prefix_without_curried_right(prefix) {
  let r = function text_prefix_without_curried_right_result(t) {
    let without = text_prefix_without(t, prefix);
    return without;
  };
  return r;
}
