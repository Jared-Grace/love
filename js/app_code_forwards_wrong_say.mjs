import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_wrong_say } from "./app_code_expression_wrong_say.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lines_wrong_say } from "./app_code_lines_wrong_say.mjs";
export function app_code_forwards_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for code: the first reminder that has something to say about this pick, or null when none does");
  ("The working of a line comes first because it answers every wrong value at once; the reminders about lines come after, because they speak only to two particular picks. The two never both speak, since a line that can be worked out writes out one value, not several lines");
  let expression = app_code_expression_wrong_say(question, answer, choice);
  if (null_not_is(expression)) {
    return expression;
  }
  let lines = app_code_lines_wrong_say(question, answer, choice);
  return lines;
}
