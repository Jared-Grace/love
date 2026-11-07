import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_learn_js_examples } from "./app_learn_js_examples.mjs";
export async function app_learn_js_lesson_go(lesson, context) {
  arguments_assert(arguments, 2);
  let id = property_get(lesson, "id");
  await app_shared_screen_go_tab(
    context,
    "lesson_id",
    id,
    app_learn_js_examples,
  );
}
