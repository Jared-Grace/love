import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_plus_one_title_name_id } from "./app_code_lesson_statement_name_plus_one_title_name_id.mjs";
import { app_code_lesson_statement_name_one_step_generic } from "./app_code_lesson_statement_name_one_step_generic.mjs";
import { app_code_lesson_statement_name_plus_one_batch } from "./app_code_lesson_statement_name_plus_one_batch.mjs";
import { app_code_lesson_statement_name_plus_one_above } from "./app_code_lesson_statement_name_plus_one_above.mjs";
export function app_code_lesson_statement_name_plus_one() {
  arguments_assert(arguments, 0);
  ("one more than a name, kept under a new name: let a = 8; let b = a + 1; console.log(b); writes out 9");
  ("The lessons on copying a name made a new name hold what another name holds. This one adds a written number to the name being copied, so it sits right after them and before the lessons that add two names together, which are more to read; the lesson on one less than a name is its twin, with a minus where the plus is, and follows it.");
  ("It used to sit after the lesson on keeping a total and remind the learner of that lesson's program, which was three names and a sum - more than this lesson's own two names and a written one.");
  let name_id = app_code_lesson_statement_name_plus_one_title_name_id();
  let lesson = app_code_lesson_statement_name_one_step_generic(
    name_id,
    app_code_lesson_statement_name_plus_one_batch,
    app_code_lesson_statement_name_plus_one_above,
  );
  return lesson;
}
