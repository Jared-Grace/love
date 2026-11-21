import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_fn_id } from "./app_learn_js_lesson_fn_id.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
export function app_learn_js_lesson_fn_id_set(fn) {
  arguments_assert(arguments, 1);
  ("One lesson function asked for what it holds, handed back under the id written down for it.");
  ("★ THIS IS THE ONLY WAY A LESSON SHOULD BE ASKED FOR. A lesson's id is not something the lesson can know: it is written down next door under the lesson's own function name, and a function cannot ask what it is called from the inside. Only a caller holding the function itself can marry the two, so anywhere that invokes a lesson function directly ends up reading whatever id the lesson happened to build for itself - which is the old, long, title-shaped one. That already happened once, to the reading that measures the course order, and it went unnoticed because both ids are words and neither looks wrong.");
  ("Whatever id the lesson built for itself is written over rather than checked, because it is on its way out and there is nothing to learn from comparing them.");
  let built = fn();
  let lesson_id = app_learn_js_lesson_fn_id(fn);
  let lesson = object_copy_property_set(built, "id", lesson_id);
  return lesson;
}
