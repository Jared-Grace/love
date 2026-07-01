import { app_code_go_back } from "../../../love/public/src/app_code_go_back.mjs";
import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
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
  const question_text = "see another example";
  const button_text = "show me another example";
  app_code_go_back(context, root, question_text, button_text);
}
