import { app_code_lesson_statement_name_one_less_pair } from "./app_code_lesson_statement_name_one_less_pair.mjs";
import { app_code_lesson_statement_name_pair_first } from "./app_code_lesson_statement_name_pair_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_name_one_less() {
  arguments_assert(arguments, 0);
  ("a name given one less than it holds: let a = 7; a = a - 1; console.log(a); writes out 6");
  ("The twin of the lesson on one more, met right after it: the same three lines with a minus where the plus was, so the only new thing is which way the name moves.");
  let pair = app_code_lesson_statement_name_one_less_pair();
  let lesson = app_code_lesson_statement_name_pair_first(pair);
  return lesson;
}
