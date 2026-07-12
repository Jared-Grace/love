import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let div = html_div_text(root, "Lessons:");
  let lessons = app_code_lessons();
  function lambda(item, index) {
    let name = property_get(item, "name");
    let id = property_get(item, "id");
    async function lambda3() {
      storage_local_set_context(context, "lesson_id", id);
      await app_shared_screen_set(context, app_code_examples);
    }
    let text = add_1_period(index);
    let r = app_replace_button_wide_text_left_centered(root, lambda3, text, "");
    let title = property_get(r, "title");
    name(title);
  }
  each_index(lessons, lambda);
}
