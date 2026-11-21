import { app_learn_js_lesson_ids } from "./app_learn_js_lesson_ids.mjs";
import { app_learn_js_lesson_current_id } from "./app_learn_js_lesson_current_id.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add_1 } from "./add_1.mjs";
export function app_learn_js_lesson_current_number(context) {
  "the 1-based position of the current lesson in the lesson list";
  let ids = app_learn_js_lesson_ids();
  let current_id = app_learn_js_lesson_current_id(context);
  let index = list_index_of(ids, current_id);
  let number = add_1(index);
  return number;
}
