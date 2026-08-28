import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
export function app_code_lessons() {
  arguments_assert(arguments, 0);
  ("Every lesson the code app hands to whoever is reading it, in the order they are learned - each entry is one lesson function invoked to hand back what it holds, so adding a lesson is adding a name to the list next door rather than editing anything here.");
  ("Which lessons those are is a question about the page being read rather than about the repo, and it is asked next door: a working copy shows all of them, and the built site shows the run that has been read through. Everything here that walks from one lesson to the next - what is first, what is next, which is last - then walks the run this reader was given, so a reader of the built site is told they are done at the end of it rather than walking off the end of what was written for them.");
  ("Walking the list of functions rather than handing it to the invoke-them-all helper is what lets each lesson be asked for by name. The helper returns only what the functions produced, and by then which function produced which is gone - and which function it was is the whole of how a lesson's id is found.");
  let fns = app_code_lessons_fns_shown();
  let lessons = list_map(fns, app_code_lesson_fn_id_set);
  return lessons;
}
