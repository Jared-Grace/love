import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_lesson_text_example_another } from "./app_code_lesson_text_example_another.mjs";
import { app_code_example_answer_gap } from "./app_code_example_answer_gap.mjs";
import { list_single } from "./list_single.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_batch_on_refill } from "./app_code_batch_on_refill.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_go_back } from "./app_code_go_back.mjs";
import { app_code_batch_item_get } from "./app_code_batch_item_get.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
import { app_code_lesson_current } from "./app_code_lesson_current.mjs";
import { app_code_lesson_title_strip } from "./app_code_lesson_title_strip.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { emoji_repeat_1 } from "./emoji_repeat_1.mjs";
export function app_code_quiz(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  app_code_lesson_title_strip(root, context, lesson);
  let on_batch = app_code_batch_on_refill(list_shuffle);
  let refresh = app_code_batch_item_get(
    root,
    lesson,
    on_batch_item,
    on_batch,
    true,
  );
  function on_batch_item(container, bs, refresh, next_get) {
    let b = list_single(bs);
    let c = app_code_container_light_blue(container);
    app_code_example_answer_gap(c);
    html_div_text(c, "Please answer the following quiz question:");
    let qs = property_get(b, "quizzes");
    let quiz_index = storage_session_initialize_context(
      context,
      "quiz_index",
      0,
    );
    let q = list_get(qs, quiz_index);
    q(context, container, c, refresh, next_get);
  }
  refresh();
  let another = app_code_lesson_text_example_another(lesson);
  let button_text = text_first_upper_to(another);
  async function lambda() {
    app_code_quiz_index_reset(context);
    await app_shared_screen_set(context, app_code_examples);
  }
  app_code_go_back(root, [
    {
      emoji: emoji_repeat_1(),
      text: button_text,
      on_click: lambda,
    },
  ]);
  let text = app_shared_button_home_text();
  async function lambda2() {
    app_code_quiz_index_reset(context);
    await app_shared_screen_set(context, app_code_home);
  }
  let g = app_code_container_padded_x(root);
  let b3 = app_shared_button_wide(g, text, lambda2);
  let value = app_shared_spaced_gap();
  html_style_margin_top(b3, value);
}
