import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_range_text(start, end) {
  arguments_assert(arguments, 2);
  ("a run of lesson numbers written the one way the home list writes them, like 6 - 10 - so a review's range and a group's range read alike");
  let start_text = text_to(start);
  let end_text = text_to(end);
  let range = text_combine_multiple([start_text, " - ", end_text]);
  return range;
}
