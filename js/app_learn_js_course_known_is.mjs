import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_course_words } from "./app_learn_js_course_words.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_learn_js_course_known_is(word) {
  arguments_assert(arguments, 1);
  let words = app_learn_js_course_words();
  let known = list_includes(words, word);
  return known;
}
