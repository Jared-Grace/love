import { list_add } from "../../love/js/list_add.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { app_code_quiz_index_set } from "../../love/js/app_code_quiz_index_set.mjs";
import { list_index_last } from "../../love/js/list_index_last.mjs";
import { app_code_lesson_previous_set } from "../../love/js/app_code_lesson_previous_set.mjs";
import { app_code_home } from "../../love/js/app_code_home.mjs";
import { app_shared_button_screen_wide } from "../../love/js/app_shared_button_screen_wide.mjs";
import { app_shared_button_home_text } from "../../love/js/app_shared_button_home_text.mjs";
import { app_code_go_back } from "../../love/js/app_code_go_back.mjs";
import { equal_not } from "../../love/js/equal_not.mjs";
import { app_code_lesson_first_id } from "../../love/js/app_code_lesson_first_id.mjs";
import { app_code_next } from "../../love/js/app_code_next.mjs";
import { app_code_quiz } from "../../love/js/app_code_quiz.mjs";
import { app_shared_screen_set } from "../../love/js/app_shared_screen_set.mjs";
import { each } from "../../love/js/each.mjs";
import { noop } from "../../love/js/noop.mjs";
import { app_code_batch_on_refill } from "../../love/js/app_code_batch_on_refill.mjs";
import { app_code_batch_item_get } from "../../love/js/app_code_batch_item_get.mjs";
import { html_div_text } from "../../love/js/html_div_text.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { app_code_lesson_text_example_another } from "../../love/js/app_code_lesson_text_example_another.mjs";
import { app_code_example_answer_gap } from "../../love/js/app_code_example_answer_gap.mjs";
import { app_code_container_light_blue } from "../../love/js/app_code_container_light_blue.mjs";
import { app_code_container_padded_x } from "../../love/js/app_code_container_padded_x.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_code_lesson_current } from "../../love/js/app_code_lesson_current.mjs";
import { app_code_lesson_title_strip } from "../../love/js/app_code_lesson_title_strip.mjs";
import { app_code_button_skip_lesson } from "../../love/js/app_code_button_skip_lesson.mjs";
import { html_clear_context } from "../../love/js/html_clear_context.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
export function app_code_examples(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  app_code_lesson_title_strip(root, context, lesson);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  app_code_example_answer_gap(c);
  let another = app_code_lesson_text_example_another(lesson);
  let example_count = property_get(lesson, "example_count");
  let plural = example_count >= 2;
  let root_word = "example";
  let is_a = null;
  if (plural) {
    is_a = text_combine_multiple(["are some ", root_word, "s:"]);
  } else {
    is_a = text_combine_multiple(["is an ", root_word, ":"]);
  }
  let combined = text_combine("Here ", is_a);
  html_div_text(c, combined);
  let refresh = app_code_batch_item_get(
    c,
    lesson,
    on_batch_item,
    app_code_batch_on_refill(noop),
    false,
  );
  function on_batch_item(container, bs) {
    function lambda2(b) {
      let ex = property_get(b, "example");
      ex(container);
    }
    each(bs, lambda2);
  }
  async function example_another() {
    await app_shared_screen_set(context, app_code_quiz);
  }
  let value_initial = app_code_lesson_first_id();
  let id = property_get(lesson, "id");
  let lesson_first_not = equal_not(id, value_initial);
  let on_back = null;
  let back_text = null;
  app_code_next(
    context,
    c,
    text_combine("see ", another),
    text_combine("please show me ", another),
    refresh,
    example_another,
    on_back,
    back_text,
    root,
  );
  if (lesson_first_not) {
    async function previous() {
      app_code_lesson_previous_set(context);
      await app_shared_screen_set(context, app_code_examples);
    }
    let backs = [];
    list_add(backs, {
      text: "take me back to the previous lesson",
      on_click: previous,
    });
    list_add(backs, {
      text: "take me back to the last quiz of the previous lesson",
      on_click: async function lambda() {
        app_code_lesson_previous_set(context);
        let previous = app_code_lesson_current(context);
        let batch = property_get(previous, "batch");
        let list = batch();
        let first = list_first(list);
        let quizzes = property_get(first, "quizzes");
        let index_last = list_index_last(quizzes);
        app_code_quiz_index_set(context, index_last);
        await app_shared_screen_set(context, app_code_quiz);
      },
    });
    app_code_go_back(root, "to the previous lesson", backs);
  }
  let g = app_code_container_padded_x(root);
  app_code_button_skip_lesson(context, g);
  let text = app_shared_button_home_text();
  let b2 = app_shared_button_screen_wide(context, app_code_home, g, text);
  return;
}
