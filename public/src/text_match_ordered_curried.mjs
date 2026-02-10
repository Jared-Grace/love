import { text_match_ordered } from "../../../love/public/src/text_match_ordered.mjs";
export function text_match_ordered_curried() {
  let r = function text_match_ordered_curried_result(target, t) {
    let matches = text_match_ordered(t, target);
    return matches;
  };
  return r;
}
