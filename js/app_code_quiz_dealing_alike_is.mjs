import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_tokens_value } from "./app_code_quiz_tokens_value.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_tokens_value_repeats } from "./app_code_quiz_tokens_value_repeats.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
export function app_code_quiz_dealing_alike_is(code, candidate) {
  "Whether a line made by dealing a question's own value tiles round its own places is still a right answer to the question the learner was actually asked: it comes out to the value they were shown, and it repeats its values where the question repeated its own.";
  "The backwards unscramble shows a value and nothing else. So a learner handed the tiles of (2 > 9) === (5 === 4) and told the answer is true has been given no way at all to tell that line apart from (2 > 4) === (5 === 9) - same tiles, same brackets, same signs in the same places, and true either way. Asking whether the two lines MEAN the same thing answers no, and marks a learner wrong for an answer the screen gave them no way to avoid. What the screen actually asked is what is asked here.";
  "The value alone would be too little, because a lesson is about how a line is written and not only about what it comes to. Where a line repeats a value, the repeat is usually its subject - the middle of 1 < 3 && 3 < 6 is the number both comparisons are about, and the mirror in (7 === 6) === (6 === 7) is the whole of what the swapping lesson teaches. So the pattern of repeats has to survive the dealing, which is the same rule the join already keeps, asked of the whole line instead of one operator.";
  "It is asked only of a dealing - values into value places, every sign and bracket left where the question put them. A rearrangement free to move a sign can land on the right value while saying something else entirely, so those are still asked what they mean rather than what they come to.";
  "A question that does not come out to anything is answered no, not asked further. Nothing was shown to the learner to build towards, so there is no value for a dealing to agree with.";
  arguments_assert(arguments, 2);
  let asked = app_code_quiz_tokens(code);
  let dealt = app_code_quiz_tokens(candidate);
  let value_asked = app_code_quiz_tokens_value(asked);
  let asked_no_value = null_is(value_asked);
  if (asked_no_value) {
    return false;
  }
  let value_dealt = app_code_quiz_tokens_value(dealt);
  let value_alike = equal(value_asked, value_dealt);
  if (not(value_alike)) {
    return false;
  }
  let repeats_asked = app_code_quiz_tokens_value_repeats(asked);
  let repeats_dealt = app_code_quiz_tokens_value_repeats(dealt);
  let repeats_alike = lists_equal_pair(repeats_asked, repeats_dealt);
  return repeats_alike;
}
