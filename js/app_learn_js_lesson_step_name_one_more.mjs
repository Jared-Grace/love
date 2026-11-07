import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_step_before_lesson_generic } from "./app_learn_js_lesson_step_before_lesson_generic.mjs";
import { app_learn_js_lesson_statement_name_one_more } from "./app_learn_js_lesson_statement_name_one_more.mjs";
export function app_learn_js_lesson_step_name_one_more() {
  arguments_assert(arguments, 0);
  ("running a program a line at a time, in Adding one to a name's programs; the first step lesson where the name being filled is the name being read, so the right side is worked out from what the name holds before the name is filled, straight before Adding one to a name");
  let lesson = app_learn_js_lesson_step_before_lesson_generic(
    "Step by step: Adding one to a name",
    "a = a + 1;",
    app_learn_js_lesson_statement_name_one_more,
  );
  return lesson;
}
