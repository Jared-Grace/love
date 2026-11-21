import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lessons_fns_shown } from "./app_learn_js_lessons_fns_shown.mjs";
import { app_learn_js_course_new_is } from "./app_learn_js_course_new_is.mjs";
import { app_learn_js_course_step_is } from "./app_learn_js_course_step_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_learn_js_lesson_fn_id } from "./app_learn_js_lesson_fn_id.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_learn_js_lessons_fns_kept() {
  arguments_assert(arguments, 0);
  ("The functions of the lessons a reader is handed, in course order - the same lessons as the course list, without building any of them where that can be helped.");
  ("★ BUILT FROM NAMES, measured 2026-11-21: a press of a lesson arrow took over a second, nearly all of it every lesson in the course being built again, by questions that only wanted to know which ids there are or which one comes first. A lesson's id is read off a table, so the ids need no lesson built. Only a link asking for the new or the step course needs the built lessons, because which lessons those courses keep is read off the lessons themselves - and that is only ever on the working copy.");
  let fns = app_learn_js_lessons_fns_shown();
  let added = app_learn_js_course_new_is();
  let step = app_learn_js_course_step_is();
  let filtered = added || step;
  if (not(filtered)) {
    return fns;
  }
  let lessons = app_learn_js_lessons();
  let kept_ids = list_map_property(lessons, "id");
  function kept_is(fn) {
    let id = app_learn_js_lesson_fn_id(fn);
    let included = list_includes(kept_ids, id);
    return included;
  }
  let kept = list_filter(fns, kept_is);
  return kept;
}
