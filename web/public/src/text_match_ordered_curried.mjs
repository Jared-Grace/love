import { text_match_ordered } from "../../../love/public/src/text_match_ordered.mjs";
export function text_match_ordered_curried(t) {
  function text_match_ordered_curried_result(target) {
    let matches = text_match_ordered(t, target);
    return matches;
  }
  return text_match_ordered_curried_result;
}
