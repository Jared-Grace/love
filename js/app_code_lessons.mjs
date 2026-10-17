import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { app_code_course_new_is } from "./app_code_course_new_is.mjs";
import { app_code_course_new_fns } from "./app_code_course_new_fns.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { app_code_course_step_is } from "./app_code_course_step_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
export function app_code_lessons() {
  arguments_assert(arguments, 0);
  ("Every lesson the code app hands to whoever is reading it, in the order they are learned - each entry is one lesson function invoked to hand back what it holds, so adding a lesson is adding a name to the list next door rather than editing anything here.");
  ("Which lessons those are is a question about the page being read rather than about the repo, and it is asked next door: a working copy shows all of them, and the built site shows the run that has been read through. Everything here that walks from one lesson to the next - what is first, what is next, which is last - then walks the run this reader was given, so a reader of the built site is told they are done at the end of it rather than walking off the end of what was written for them.");
  ("Walking the list of functions rather than handing it to the invoke-them-all helper is what lets each lesson be asked for by name. The helper returns only what the functions produced, and by then which function produced which is gone - and which function it was is the whole of how a lesson's id is found.");
  let fns = app_code_lessons_fns_shown();
  let added = app_code_course_new_is();
  if (added) {
    ("2026-10-17: a link saying course=new shows only the lessons latest does not show, so they can be read through without walking past the ones already read. The cut is on the functions, before any lesson is built, and keeps the order of the whole run.");
    let fresh = app_code_course_new_fns();
    function fresh_is(fn) {
      let included = list_includes(fresh, fn);
      return included;
    }
    fns = list_filter(fns, fresh_is);
  }
  let lessons = list_map(fns, app_code_lesson_fn_id_set);
  let step = app_code_course_step_is();
  if (step) {
    ("2026-10-15: a link saying course=step shows only the lessons that step through a program, and Next and Previous move among those alone. The cut is on the built lessons, because each step lesson says so of itself, so a new one joins without a list being told. Not picked: a written list of step lessons, which a new one would be missing from until somebody remembered");
    function guided_is(lesson) {
      let guided = property_get_or_null(lesson, "examples_guided");
      let r = equal(guided, true);
      return r;
    }
    let guided = list_filter(lessons, guided_is);
    return guided;
  }
  return lessons;
}
