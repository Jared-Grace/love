import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_either_first_expression } from "./app_code_lesson_expression_either_first_expression.mjs";
import { app_code_lesson_expression_either_first_proof } from "./app_code_lesson_expression_either_first_proof.mjs";
export function app_code_lesson_expression_either_first_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: one line of this lesson's own kind worked out both ways round, ending on the one value both orders land on");
  ("It stands above the card rather than under the line on it, because a card holding both a working out and the same line to press asks the learner to read the answer and then press for it. Above the card it is what the lesson is about; on the card it was what the card was about, and the card is now only the pressing.");
  ("Its own line rather than the line the learner presses. The two are built the same way and neither is the other's answer, so a learner who read the one above cannot get the one below right by copying it down.");
  let tree = app_code_lesson_expression_either_first_expression();
  app_code_lesson_expression_either_first_proof(root, tree);
}
