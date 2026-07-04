import { app_code_lesson_text_example_another } from "../../../love/public/src/app_code_lesson_text_example_another.mjs";
import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
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
  let refresh = app_code_batch_item_get(
    root,
    lesson,
    on_batch_item,
    list_shuffle,
    true,
  );
  function on_batch_item(container, bs, refresh) {
    let b = list_single(bs);
    let c = app_code_container_light_blue(container);
    app_code_example_answer_gap(c);
    html_div_text(c, "Please answer the following quiz question:");
    let qs = property_get(b, "quizzes");
    let q = list_get(qs, quiz_index);
    q(context, container, c, refresh);
  }
  refresh();
  app_code_lesson_text_example_another(lesson);
  const question_text = "and see another example";
  const button_text = "go back and show me another example";
  async function lambda() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_code_go_back(root, question_text, button_text, lambda);
}
