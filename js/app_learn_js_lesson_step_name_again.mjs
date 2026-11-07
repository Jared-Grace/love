import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_step_of_lesson_generic } from "./app_learn_js_lesson_step_of_lesson_generic.mjs";
import { app_learn_js_lesson_statement_name_again } from "./app_learn_js_lesson_statement_name_again.mjs";
export function app_learn_js_lesson_step_name_again() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Giving a name a new value's programs; asked for by the human 2026-10-15, as the first step lesson where a line gives a name a new value, straight after Giving a name a new value");
  let lesson = app_learn_js_lesson_step_of_lesson_generic(
    "Step by step: Giving a name a new value",
    'a = "olives";',
    app_learn_js_lesson_statement_name_again,
  );
  return lesson;
}
