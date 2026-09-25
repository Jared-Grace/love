import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_one_title_name_id } from "./app_code_lesson_statement_name_plus_one_title_name_id.mjs";
import { app_code_lesson_statement_name_one_step_generic } from "./app_code_lesson_statement_name_one_step_generic.mjs";
import { app_code_lesson_statement_name_plus_one_batch } from "./app_code_lesson_statement_name_plus_one_batch.mjs";
import { app_code_lesson_statement_name_plus_one_above } from "./app_code_lesson_statement_name_plus_one_above.mjs";
export function app_code_lesson_statement_name_plus_one() {
  arguments_assert(arguments, 0);
  ("one more than a name, kept under a new name: let a = 8; let b = a + 1; console.log(b); writes out 9");
  ("The lesson on keeping a total made a new name from two names. This one makes a new name from one name and a written number, so it sits right after that lesson; the lesson on one less than a name is its twin, with a minus where the plus is, and follows it.");
  let name_id = app_code_lesson_statement_name_plus_one_title_name_id();
  let lesson = app_code_lesson_statement_name_one_step_generic(
    name_id,
    app_code_lesson_statement_name_plus_one_batch,
    app_code_lesson_statement_name_plus_one_above,
  );
  return lesson;
}
