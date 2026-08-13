import { app_code_operator_part_around } from "./app_code_operator_part_around.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_which_part_first_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the one wrong answer is the other part of the same line - for 1 + 2 * 4 the answer is 2 * 4 and the wrong button is 1 + 2");
  ("that part rather than something invented, because it is the mistake this lesson exists to stop. A learner who has not taken the rule on solves left to right and reaches for 1 + 2, so the wrong button is the answer they would give, and choosing it is the moment the lesson lands");
  ("two buttons only, and both are real parts of the line in front of them. A third made-up part would be discarded on sight - it holds numbers the line does not - so it would add reading without adding a decision");
  ("five tokens, a number at each end and the two operators between them, so the operators are the second token and the second-from-last. The weaker one is whichever of those two is not the *");
  ("the answer is passed in and not used: the wrong part is read off the question, and reading it off the answer instead would mean subtracting one part of the line from another rather than simply naming the other operator");
  let strong = js_operator_asterisk_symbol();
  let tokens = app_code_quiz_tokens(question);
  let operator_first = list_get(tokens, 1);
  let operator_last = list_get_end_1(tokens);
  let strong_is_first = equal(operator_first, strong);
  let weak = ternary(strong_is_first, operator_last, operator_first);
  let part = app_code_operator_part_around(question, weak);
  let r = [part];
  return r;
}
