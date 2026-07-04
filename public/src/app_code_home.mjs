import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { list_property_previous_value } from "../../../love/public/src/list_property_previous_value.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { app_code_go_back } from "../../../love/public/src/app_code_go_back.mjs";
import { app_code_quiz } from "../../../love/public/src/app_code_quiz.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_code_batch_item_get } from "../../../love/public/src/app_code_batch_item_get.mjs";
import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  app_code_example_answer_gap(c);
  let right = null;
  let example_count = property_get(lesson, "example_count");
  if (example_count >= 2) {
    right = "are some examples:";
  } else {
    right = "is an example:";
  }
  if (example_count >= 2) {
    right = "some more examples:";
  } else {
    right = "another example:";
  }
  let combined = text_combine("Here ", right);
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
  app_code_next(
    context,
    root,
    "see another example",
    "please show me another example",
    refresh,
    example_another,
  );
  let value_initial = app_code_lesson_first_id();
  let id = property_get(lesson, "id");
  let ne = equal_not(id, value_initial);
  if (ne) {
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
      await app_shared_screen_set(context, app_code_home);
    }
    app_code_go_back(
      root,
      "to the previous lesson",
      "take me back to the previous lesson",
      previous,
    );
  }
  return;
}
