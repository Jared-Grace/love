import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_replace_button_screen_wide } from "../../../love/public/src/app_replace_button_screen_wide.mjs";
import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_quiz(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let quiz_index = storage_local_initialize_context(context, "quiz_index", 0);
  let refresh = app_code_batch_item_get(root, lesson, on_batch_item);
  function on_batch_item(container, b, refresh) {
    let qs = property_get(b, "quizzes");
    let q = list_get(qs, quiz_index);
    q(context, container, refresh);
  }
  refresh();
  let container3 = app_code_container_light_blue(root);
  let combined2 = text_combine_multiple(list);
  const question_text = "see another example";
  html_div_text(container3, "Do you want to go back and ", question_text, "?");
  let left = emoji_arrow_left();
  const button_text = "show me another example";
  let combined = text_combine_multiple([
    left,
    "Yes, please go back and ",
    button_text,
  ]);
  app_replace_button_screen_wide(context, app_code_home, container3, combined);
}
