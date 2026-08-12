import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_operator_code_subject_first(
  subject_first,
  subject_code,
  other_code,
  symbol,
) {
  arguments_assert(arguments, 4);
  ("two pieces of code with an operator between them, the subject on the left when subject_first and on the right otherwise");
  ("A lesson that varies which side its idea stands on says so with one word rather than by building the line twice. Two lessons were each writing the same pair of swaps - the group on the left or the right, the bracketed comparison on the left or the right - and the swap is the same act in both, whatever the thing being moved is.");
  ("Subject is the piece the lesson is about, and other is whatever it is being compared or combined with. Naming them that way is what lets one function serve both, because neither name says comparison or group.");
  let left_code = ternary(subject_first, subject_code, other_code);
  let right_code = ternary(subject_first, other_code, subject_code);
  let code = app_code_operator_code(left_code, symbol, right_code);
  return code;
}
