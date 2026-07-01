import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { app_replace_button_screen } from "../../../love/public/src/app_replace_button_screen.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_quiz(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let quiz_index = storage_local_initialize_context(context, "quiz_index", 0);
  let refresh = app_code_batch_item_get(root, lesson, on_batch_item);
  function on_batch_item(container, b) {
    let qs = property_get(b, "quizzes");
    let q = list_get(qs, quiz_index);
    html_div_text(container, "Do you want to take another quiz now?");
    q(container);
  }
  refresh();
  html_div_text(root, "Do you want to go back and see another example?");
  let left = emoji_arrow_left();
  let combined = text_combine(
    left,
    "Yes, please go back and show me another example",
  );
  app_replace_button_screen(context, app_code_home, root, combined);
}
