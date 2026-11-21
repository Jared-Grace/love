import { app_learn_js_lesson_ids } from "./app_learn_js_lesson_ids.mjs";
import { list_first } from "./list_first.mjs";
export function app_learn_js_lesson_first_id() {
  let ids = app_learn_js_lesson_ids();
  let value = list_first(ids);
  return value;
}
