import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_tokens_value } from "./app_code_quiz_tokens_value.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_quiz_dealing_value_alike_is(code, candidate) {
  "Whether a line comes out to the same value as the question it is offered as an answer to. This is the one thing every backwards unscramble asks of every learner, because the value is the one thing the screen tells them.";
  "A learner handed the tiles of (2 > 9) === (5 === 4) and told the answer is true has been given no way at all to tell that line apart from (2 > 4) === (5 === 9) - same tiles, same brackets, same signs in the same places, and true either way. So the value has to be enough on its own to make an answer right, and anything a lesson wants on top of the value has to be something the screen also showed.";
  "A question that does not come out to anything is answered no, not asked further. Nothing was shown for a learner to build towards, so there is no value for their line to agree with.";
  arguments_assert(arguments, 2);
  let asked = app_code_quiz_tokens(code);
  let value_asked = app_code_quiz_tokens_value(asked);
  let asked_no_value = null_is(value_asked);
  if (asked_no_value) {
    return false;
  }
  let dealt = app_code_quiz_tokens(candidate);
  let value_dealt = app_code_quiz_tokens_value(dealt);
  let value_alike = equal(value_asked, value_dealt);
  if (not(value_alike)) {
    return false;
  }
  return true;
}
