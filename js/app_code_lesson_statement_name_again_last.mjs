import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_again_pair } from "./app_code_lesson_statement_name_again_pair.mjs";
import { app_code_lesson_statement_name_pair_last } from "./app_code_lesson_statement_name_pair_last.mjs";
import { app_code_lesson_statement_name_again } from "./app_code_lesson_statement_name_again.mjs";
export function app_code_lesson_statement_name_again_last() {
  arguments_assert(arguments, 0);
  ('a name given another word, written out only at the end: let a = "grapes"; a = "olives"; console.log(a); writes out olives');
  let pair = app_code_lesson_statement_name_again_pair();
  let lesson = app_code_lesson_statement_name_pair_last(
    app_code_lesson_statement_name_again,
    pair,
  );
  return lesson;
}
