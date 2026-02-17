import { text_prefix_change } from "../../../love/public/src/text_prefix_change.mjs";
export function text_prefix_change_curried(t) {
  let r = function text_prefix_change_curried_result(before, after) {
    let together = text_prefix_change(t, before, after);
    return together;
  };
  return r;
}
