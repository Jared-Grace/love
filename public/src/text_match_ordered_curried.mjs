import { text_match_ordered } from "../../../love/public/src/text_match_ordered.mjs";
export function text_match_ordered_curried(query) {
  let r = function text_match_ordered_curried_result(value) {
    let matches = text_match_ordered(query, value);
    return matches;
  };
  return r;
}
