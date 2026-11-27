import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { app_learn_js_lesson_number_shown } from "./app_learn_js_lesson_number_shown.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_learn_js_lessons_range_text(start, end) {
  arguments_assert(arguments, 2);
  ("a run of lesson numbers written the one way the home list writes them, like 6 - 10 - so a review's range and a group's range read alike");
  ("2026-11-27, at the human's asking: start and end are places in the list, and each is written as the number shown for it, skipping any holding 666");
  let input = app_learn_js_lesson_number_shown(start);
  let start_text = text_to(input);
  let input2 = app_learn_js_lesson_number_shown(end);
  let end_text = text_to(input2);
  let range_span = text_combine_multiple([start_text, " - ", end_text]);
  return range_span;
}
