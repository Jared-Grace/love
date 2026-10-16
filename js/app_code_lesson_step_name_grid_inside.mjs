import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_step_before_lesson_generic } from "./app_code_lesson_step_before_lesson_generic.mjs";
import { app_code_lesson_statement_name_grid_inside } from "./app_code_lesson_statement_name_grid_inside.mjs";
export function app_code_lesson_step_name_grid_inside() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Square inside the grid's programs: three lines each made of names the lines before them made, the row check, the column check, and both together; straight before Square inside the grid, so the learner finds each check one line at a time before being asked whether the square is inside all at once");
  let lesson = app_code_lesson_step_before_lesson_generic(
    "Step by step: Square inside the grid",
    "let ok = in_r && in_c;",
    app_code_lesson_statement_name_grid_inside,
  );
  return lesson;
}
