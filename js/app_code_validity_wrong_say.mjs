import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operator_validity_wrong_say } from "./app_code_operator_validity_wrong_say.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_dot_validity_wrong_say } from "./app_code_dot_validity_wrong_say.mjs";
import { app_code_call_validity_wrong_say } from "./app_code_call_validity_wrong_say.mjs";
export function app_code_validity_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner calls a line valid or invalid wrongly: the first reminder that has something to say about this line, or null when none does");
  ("The two never both speak: the arithmetic reminder needs an arithmetic operator in the line and the dot reminder needs a dot, and the dot lessons' lines hold only names, numbers and the dot");
  let operator = app_code_operator_validity_wrong_say(question, answer, choice);
  if (null_not_is(operator)) {
    return operator;
  }
  let dot = app_code_dot_validity_wrong_say(question, answer, choice);
  if (null_not_is(dot)) {
    return dot;
  }
  ("2026-10-26: the function call reminder comes last; it needs the line to start with a function's name, and the calls hold no arithmetic operator and no dot, so none of the three speak together");
  let call = app_code_call_validity_wrong_say(question, answer, choice);
  return call;
}
