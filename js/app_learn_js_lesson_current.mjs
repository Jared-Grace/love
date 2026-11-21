import { app_learn_js_lessons_fns_kept } from "./app_learn_js_lessons_fns_kept.mjs";
import { app_learn_js_lesson_current_id } from "./app_learn_js_lesson_current_id.mjs";
import { app_learn_js_lesson_fn_id } from "./app_learn_js_lesson_fn_id.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { app_learn_js_lesson_fn_id_set } from "./app_learn_js_lesson_fn_id_set.mjs";
export function app_learn_js_lesson_current(context) {
  let fns = app_learn_js_lessons_fns_kept();
  let lesson_id = app_learn_js_lesson_current_id(context);
  ("only the lesson being read is built, rather than the whole course to pick one out of it - each lesson is built fresh on every ask either way");
  function id_is(fn) {
    let id = app_learn_js_lesson_fn_id(fn);
    let r = equal(id, lesson_id);
    return r;
  }
  let fn = list_find(fns, id_is);
  let lesson = app_learn_js_lesson_fn_id_set(fn);
  return lesson;
}
