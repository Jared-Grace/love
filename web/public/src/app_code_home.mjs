import { list_index_of_previous } from "../../../love/public/src/list_index_of_previous.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { app_code_go_back } from "../../../love/public/src/app_code_go_back.mjs";
import { app_code_quiz } from "../../../love/public/src/app_code_quiz.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  html_div_text(c, "Here is an example:");
  let refresh = app_code_batch_item_get(c, lesson, on_batch_item);
  function on_batch_item(container, b) {
    let ex = property_get(b, "example");
    ex(container);
  }
  async function example_another() {
    await app_shared_screen_set(context, app_code_quiz);
  }
  app_code_next(
    context,
    root,
    "see another example",
    "please show me another example",
    refresh,
    example_another,
  );
  async function previous() {
    let lesson_id = storage_local_initialize_context(
      context,
      "lesson_id",
      value,
    );
    let index_previous = list_index_of_previous(list, item);
    await app_shared_screen_set(context, app_code_home);
  }
  app_code_go_back(
    root,
    "to the previous lesson",
    "take me back to the previous lesson",
    previous,
  );
  return;
  html_p_text_multiple(root, [
    "In computer programming",
    "There are symbols",
    "All 10 of these numbers are different symbols: ",
  ]);
  html_p_text_multiple(root, [
    "In English:",
    "There are letters",
    "Letters are inside words",
    "Words are inside sentences",
    "Compture programs have a similar structure",
    "In a computer program, there are symbols",
    "Symbols are inside ",
  ]);
}
