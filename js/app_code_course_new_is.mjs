import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_said } from "./app_code_course_said.mjs";
import { app_code_course_new_word } from "./app_code_course_new_word.mjs";
import { equal } from "./equal.mjs";
export function app_code_course_new_is() {
  "Whether the page being read is showing only the lessons latest does not show: its link says course=new, and it is the working copy.";
  arguments_assert(arguments, 0);
  let said = app_code_course_said();
  let word = app_code_course_new_word();
  let r = equal(said, word);
  return r;
}
