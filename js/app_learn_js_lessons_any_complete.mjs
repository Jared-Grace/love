import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_lesson_complete_is } from "./app_learn_js_lesson_complete_is.mjs";
import { list_any } from "./list_any.mjs";
export function app_learn_js_lessons_any_complete(context) {
  arguments_assert(arguments, 1);
  ("whether this learner has finished even one lesson - a learner who has not is starting, not going on");
  let lessons = app_learn_js_lessons();
  let progress = app_code_progress_read(context);
  function lambda(item) {
    let id = property_get(item, "id");
    let complete = app_learn_js_lesson_complete_is(progress, id);
    return complete;
  }
  let any = list_any(lessons, lambda);
  return any;
}
