import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comment_wrong_say } from "./app_code_comment_wrong_say.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_console_log_wrong_say } from "./app_code_console_log_wrong_say.mjs";
import { app_code_expression_wrong_say } from "./app_code_expression_wrong_say.mjs";
import { app_code_math_call_wrong_say } from "./app_code_math_call_wrong_say.mjs";
import { app_code_string_value_wrong_say } from "./app_code_string_value_wrong_say.mjs";
import { app_code_lines_wrong_say } from "./app_code_lines_wrong_say.mjs";
import { app_code_program_trace_wrong_say } from "./app_code_program_trace_wrong_say.mjs";
import { app_code_program_lets_wrong_say } from "./app_code_program_lets_wrong_say.mjs";
export function app_code_forwards_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for code: the first reminder that has something to say about this pick, or null when none does");
  ("The working of a line comes first because it answers every wrong value at once; the reminders about lines come after, because they speak only to two particular picks. The two never both speak, since a line that can be worked out writes out one value, not several lines");
  ("2026-10-26: code holding a // comment is answered first, because what the comment lessons teach is the skip, and the other reminders would explain the code as if the comment were not there");
  let comment = app_code_comment_wrong_say(question, answer, choice);
  if (null_not_is(comment)) {
    return comment;
  }
  ("2026-10-26: one console.log call is answered next, by what console.log does with its inside; the expression reminder takes only a bare expression, so the two never both speak");
  let logged = app_code_console_log_wrong_say(question, answer, choice);
  if (null_not_is(logged)) {
    return logged;
  }
  let expression = app_code_expression_wrong_say(question, answer, choice);
  if (null_not_is(expression)) {
    return expression;
  }
  ("2026-10-26: one Math call given numbers is answered after the working of operators, which has no step for a call, so the two never both speak on a call that only holds numbers");
  let math = app_code_math_call_wrong_say(question, answer, choice);
  if (null_not_is(math)) {
    return math;
  }
  ("2026-10-26: a string standing alone has no operator and is no call, so it is answered here by what its quote marks mean");
  let string = app_code_string_value_wrong_say(question, answer, choice);
  if (null_not_is(string)) {
    return string;
  }
  let lines = app_code_lines_wrong_say(question, answer, choice);
  if (null_not_is(lines)) {
    return lines;
  }
  ("2026-10-26: a program that gives names values is followed line by line last, because it answers any wrong pick, while the two reminders about lines name the one mistake a pick makes");
  let traced = app_code_program_trace_wrong_say(question, answer, choice);
  if (null_not_is(traced)) {
    return traced;
  }
  ("2026-10-26: a program of let lines the trace cannot follow, such as one calling Math, is run instead and each name's value read off, so it comes after the trace, which says more where it can follow");
  let lets = app_code_program_lets_wrong_say(question, answer, choice);
  return lets;
}
