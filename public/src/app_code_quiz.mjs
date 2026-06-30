import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_code_example_text } from "../../../love/public/src/app_code_example_text.mjs";
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
  html_div_text(root, "Do you want go back and see another example?");
  let combined = app_code_example_text();
  app_replace_button(root, combined, example);
  app_replace_button_screen(context, app_code_home, root, "Back");
}
