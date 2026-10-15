import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_step_word } from "./app_code_course_step_word.mjs";
export function app_code_course_suggestions(word) {
  arguments_assert(arguments, 1);
  let step = app_code_course_step_word();
  let offered = [step];
  return offered;
}
