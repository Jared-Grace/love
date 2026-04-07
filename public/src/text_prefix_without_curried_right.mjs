import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function text_prefix_without_curried_right(prefix) {
  return function text_prefix_without_curried_right_result(t) {
    return text_prefix_without(t, prefix);
  };
}
