import { arguments_assert } from "./arguments_assert.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_any } from "./list_any.mjs";
export function app_code_lesson_quiz_token_select_done_is(variations, chosen) {
  "Say whether the pieces tapped so far spell one of the orders still standing exactly, which is what finishes this question.";
  "Every order still standing begins with what has been tapped, so being a beginning is not enough - the question is answered only when the taps have run out one of them to its end.";
  arguments_assert(arguments, 2);
  function lambda(variation) {
    let same = lists_equal_pair(variation, chosen);
    return same;
  }
  let any = list_any(variations, lambda);
  return any;
}
