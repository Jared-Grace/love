import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_exists_assert_json } from "./property_exists_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lessons() {
  arguments_assert(arguments, 0);
  ("Every lesson the code app hands to whoever is reading it, in the order they are learned - each entry is one lesson function invoked to hand back what it holds, so adding a lesson is adding a name to the list next door rather than editing anything here.");
  ("Which lessons those are is a question about the page being read rather than about the repo, and it is asked next door: a working copy shows all of them, and the built site shows the run that has been read through. Everything here that walks from one lesson to the next - what is first, what is next, which is last - then walks the run this reader was given, so a reader of the built site is told they are done at the end of it rather than walking off the end of what was written for them.");
  ("★ THE ID IS PUT ON HERE, AND THIS IS THE ONLY PLACE THAT CAN. Each lesson is stored and linked under a written-down id, kept in a table next door under the lesson's own function name. A lesson function cannot look its own id up, because a function has no way to ask what it is called from the inside; here it is still known which function made which record, so here is where the two are married. Whatever id the lesson built for itself is written over.");
  ("Walking the list of functions rather than handing it to the invoke-them-all helper is what keeps that knowledge. The helper returns only what the functions produced, and by then which function produced which is gone.");
  let fns = app_code_lessons_fns_shown();
  let ids = app_code_lesson_ids_short();
  function lambda(fn) {
    let built = fn();
    let lesson_fn_name = fn.name;
    property_exists_assert_json(ids, lesson_fn_name, {
      hint: "every lesson needs an id written down for it, under its own function name — has a lesson just been added or renamed without the table being told?",
    });
    let lesson_id = property_get(ids, lesson_fn_name);
    let lesson = object_copy_property_set(built, "id", lesson_id);
    return lesson;
  }
  let lessons = list_map(fns, lambda);
  return lessons;
}
