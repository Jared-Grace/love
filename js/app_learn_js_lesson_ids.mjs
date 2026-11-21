import { app_learn_js_lessons_fns_kept } from "./app_learn_js_lessons_fns_kept.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_lesson_fn_id } from "./app_learn_js_lesson_fn_id.mjs";
export function app_learn_js_lesson_ids() {
  "the ordered shareable ids of every code lesson (symbols_digits_numbered, operators_integer_division, ...), for crawling or deep-linking each lesson";
  "read off the lessons' names rather than off the lessons, so no lesson is built to answer it - the same ids in the same order as the course list, which is how a lesson arrow went from a second to a blink";
  let fns = app_learn_js_lessons_fns_kept();
  let ids = list_map(fns, app_learn_js_lesson_fn_id);
  return ids;
}
