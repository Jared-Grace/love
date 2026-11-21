import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_ids_short } from "./app_learn_js_lesson_ids_short.mjs";
import { property_exists_assert_json } from "./property_exists_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_lesson_fn_id(fn) {
  arguments_assert(arguments, 1);
  ("The id a lesson is stored and linked under, read off the table by the lesson's own function name - without building the lesson, which is the slow part of asking for one.");
  let ids = app_learn_js_lesson_ids_short();
  let lesson_fn_name = fn.name;
  property_exists_assert_json(ids, lesson_fn_name, {
    hint: "every lesson needs an id written down for it, under its own function name — has a lesson just been added or renamed without the table being told?",
  });
  let lesson_id = property_get(ids, lesson_fn_name);
  return lesson_id;
}
