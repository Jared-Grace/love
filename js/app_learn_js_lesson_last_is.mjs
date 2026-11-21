import { app_learn_js_lesson_ids } from "./app_learn_js_lesson_ids.mjs";
import { app_learn_js_lesson_index_by_id } from "./app_learn_js_lesson_index_by_id.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
export function app_learn_js_lesson_last_is(lesson_id) {
  let ids = app_learn_js_lesson_ids();
  let index = app_learn_js_lesson_index_by_id(lesson_id);
  let li = list_index_last_is(ids, index);
  return li;
}
