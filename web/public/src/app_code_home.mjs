import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { list_first_property } from "../../../love/public/src/list_first_property.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { app_code_container_light } from "../../../love/public/src/app_code_container_light.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove_last_single } from "../../../love/public/src/list_remove_last_single.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lessons = app_code_lessons();
  let value = list_first_property(lessons, "id");
  let lesson_id = storage_local_initialize_context(context, "lesson_id", value);
  let lesson = list_find_property(lessons, "id", lesson_id);
  let above = property_get(lesson, "above");
  let batch = property_get(lesson, "batch");
  above(root);
  let h = html_hr(root2);
  html_div_text(root, "Here is an example:");
  let example_div = html_div(root);
  let b = [];
  function example() {
    let e = list_empty_is(b);
    if (e) {
      b = batch();
      list_shuffle(b);
    }
    let r = list_remove_last_single(b);
    let render2 = property_get(r, "render");
    let question2 = property_get(render2, "question");
    let answer2 = property_get(render2, "answer");
    html_clear(example_div);
    let div = app_code_container_light(example_div);
    question2(div);
    let div2 = app_code_container_light(example_div);
    answer2(div2);
  }
  html_div_text(root, "Do you want another example?");
  app_replace_button(root, "Yes, show me another example", example);
  example();
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
