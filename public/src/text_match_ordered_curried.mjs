import { text_match_ordered } from "../../../love/public/src/text_match_ordered.mjs";
export function text_match_ordered_curried() {
  return function text_match_ordered_curried_result(target, t) {
    return text_match_ordered(t, target);
  };
}
