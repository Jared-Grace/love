import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { app_code_quiz_index_transform } from "../../../love/public/src/app_code_quiz_index_transform.mjs";
import { at_least_1 } from "../../../love/public/src/at_least_1.mjs";
import { app_code_quiz_index_get } from "../../../love/public/src/app_code_quiz_index_get.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { app_replace_button_screen_wide } from "../../../love/public/src/app_replace_button_screen_wide.mjs";
import { app_replace_button_home_text } from "../../../love/public/src/app_replace_button_home_text.mjs";
import { app_code_go_back } from "../../../love/public/src/app_code_go_back.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { list_property_previous_value } from "../../../love/public/src/list_property_previous_value.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_code_quiz } from "../../../love/public/src/app_code_quiz.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_lesson_text_example_another } from "../../../love/public/src/app_code_lesson_text_example_another.mjs";
import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_examples(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  app_code_example_answer_gap(c);
  let another = app_code_lesson_text_example_another(lesson);
  let example_count = property_get(lesson, "example_count");
  const plural = example_count >= 2;
  const root_word = "example";
  let is_a = null;
  if (plural) {
    is_a = "are some " + root_word + "s:";
  } else {
    is_a = "is an " + root_word + ":";
  }
  let combined = text_combine("Here ", is_a);
  html_div_text(c, combined);
  let refresh = app_code_batch_item_get(c, lesson, on_batch_item, noop, false);
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
  let quiz_index = app_code_quiz_index_get(context);
  if (at_least_1(quiz_index)) {
    on_back = function lambda() {
      let quiz_index = app_code_quiz_index_transform(
        context,
        quizzes,
        subtract_1,
      );
      refresh();
    };
    back_text = " to the previous quiz";
  }
  app_code_next(
    context,
    c,
    "see " + another,
    "please show me " + another,
    refresh,
    example_another,
    lambda3,
    null,
    root,
  );
  if (lesson_first_not) {
    async function previous() {
      function lambda(value) {
        let list = app_code_lessons();
        let value_new = list_property_previous_value(list, "id", value);
        return value_new;
      }
      storage_local_transform_context(
        context,
        "lesson_id",
        value_initial,
        lambda,
      );
      await app_shared_screen_set(context, app_code_examples);
    }
    app_code_go_back(
      root,
      "to the previous lesson",
      "take me back to the previous lesson",
      previous,
    );
  }
  let text = app_replace_button_home_text();
  let b2 = app_replace_button_screen_wide(context, app_code_home, root, text);
  return;
}
