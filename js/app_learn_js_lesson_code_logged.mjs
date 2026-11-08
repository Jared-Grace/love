import { app_learn_js_value_logged_output } from "./app_learn_js_value_logged_output.mjs";
import { app_learn_js_lesson_code_generic } from "./app_learn_js_lesson_code_generic.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
export function app_learn_js_lesson_code_logged(params) {
  let value = app_learn_js_value_logged_output();
  let next_params = object_copy_assign(params, {
    value,
  });
  let lesson = app_learn_js_lesson_code_generic(next_params);
  return lesson;
}
