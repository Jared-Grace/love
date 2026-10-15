import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_step_word } from "./app_code_course_step_word.mjs";
import { equal } from "./equal.mjs";
export function app_code_course_known_is(word) {
  arguments_assert(arguments, 1);
  let step = app_code_course_step_word();
  let known = equal(word, step);
  return known;
}
