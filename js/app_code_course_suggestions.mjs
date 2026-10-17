import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_words } from "./app_code_course_words.mjs";
export function app_code_course_suggestions(word) {
  arguments_assert(arguments, 1);
  let offered = app_code_course_words();
  return offered;
}
