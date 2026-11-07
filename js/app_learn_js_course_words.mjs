import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_course_step_word } from "./app_learn_js_course_step_word.mjs";
import { app_learn_js_course_new_word } from "./app_learn_js_course_new_word.mjs";
export function app_learn_js_course_words() {
  "Every course word a code app link may say, each naming a run of lessons narrower than the whole one.";
  arguments_assert(arguments, 0);
  let step = app_learn_js_course_step_word();
  let added = app_learn_js_course_new_word();
  let words = [step, added];
  return words;
}
