import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
export async function app_code_review_go_to_lesson(lesson, context) {
  arguments_assert(arguments, 2);
  let id = property_get(lesson, "id");
  await app_shared_screen_go_tab(context, "lesson_id", id, app_code_examples);
}
