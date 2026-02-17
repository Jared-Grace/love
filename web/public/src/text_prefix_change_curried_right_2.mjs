import { text_prefix_change } from "../../../love/public/src/text_prefix_change.mjs";
export function text_prefix_change_curried_right_2(before, after) {
  return function text_prefix_change_curried_right_2_result(t) {
    return text_prefix_change(t, before, after);
  };
}
