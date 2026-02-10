import { text_match_ordered } from "../../../love/public/src/text_match_ordered.mjs";
export function text_match_ordered_curried(input) {
  let r = function text_match_ordered_curried_result(search) {
    let matches = text_match_ordered(input, search);
    return matches;
  };
  return r;
}
