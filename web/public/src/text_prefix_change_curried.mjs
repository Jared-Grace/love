import { text_prefix_change } from "../../../love/public/src/text_prefix_change.mjs";
export function text_prefix_change_curried(s) {
  return function text_prefix_change_curried_result(before, after) {
    return text_prefix_change(s, before, after);
  };
}
