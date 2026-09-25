import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_minus_one_title_name_id } from "./app_code_lesson_statement_name_minus_one_title_name_id.mjs";
import { app_code_lesson_statement_name_one_step_generic } from "./app_code_lesson_statement_name_one_step_generic.mjs";
import { app_code_lesson_statement_name_minus_one_batch } from "./app_code_lesson_statement_name_minus_one_batch.mjs";
import { app_code_lesson_statement_name_minus_one_above } from "./app_code_lesson_statement_name_minus_one_above.mjs";
export function app_code_lesson_statement_name_minus_one() {
  arguments_assert(arguments, 0);
  ("one less than a name, kept under a new name: let a = 8; let b = a - 1; console.log(b); writes out 7");
  ("The twin of the lesson on one more than a name, with a minus where the plus is, so it comes right after it, and before the lesson that writes the answer back into the same name.");
  ("A new name was chosen over writing back into the same name at the human's suggestion, because a learner reading a new name never has to see a name lose what it held.");
  let name_id = app_code_lesson_statement_name_minus_one_title_name_id();
  let lesson = app_code_lesson_statement_name_one_step_generic(
    name_id,
    app_code_lesson_statement_name_minus_one_batch,
    app_code_lesson_statement_name_minus_one_above,
  );
  return lesson;
}
