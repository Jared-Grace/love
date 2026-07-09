import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { add_1_period } from "../../../love/public/src/add_1_period.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_examples } from "../../../love/public/src/app_code_examples.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let div = html_div_text(root, "Lessons:");
  let lessons = app_code_lessons();
  function lambda(item) {
    let name = property_get(item, "name");
    let id = property_get(item, "id");
    async function lambda3() {
      storage_local_set_context(context, "lesson_id", id);
      await app_shared_screen_set(context, app_code_examples);
    }
    let text = add_1_period(index);
    let combined = text_combine_middle_space(text, name);
    let b = app_replace_button_wide(root, combined, lambda3);
  }
  each(lessons, lambda);
}
