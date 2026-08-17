import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current } from "./app_code_lesson_current.mjs";
import { app_code_lesson_title_strip } from "./app_code_lesson_title_strip.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_example_answer_gap } from "./app_code_example_answer_gap.mjs";
import { app_code_lesson_text_example_another } from "./app_code_lesson_text_example_another.mjs";
import { app_code_lesson_examples_plural_is } from "./app_code_lesson_examples_plural_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_batch_on_refill } from "./app_code_batch_on_refill.mjs";
import { noop } from "./noop.mjs";
import { app_code_batch_item_get } from "./app_code_batch_item_get.mjs";
import { app_code_examples_on_batch_item } from "./app_code_examples_on_batch_item.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_quiz } from "./app_code_quiz.mjs";
export function app_code_examples_example_another(context, root) {
  arguments_assert(arguments, 2);
  let lesson = app_code_lesson_current(context);
  app_code_lesson_title_strip(root, context, lesson);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  app_code_example_answer_gap(c);
  let another = app_code_lesson_text_example_another(lesson);
  let plural = app_code_lesson_examples_plural_is(lesson);
  let root_word = "example";
  let is_a = null;
  if (plural) {
    is_a = text_combine_multiple(["are some ", root_word, "s:"]);
  } else {
    is_a = text_combine_multiple(["is an ", root_word, ":"]);
  }
  let combined = text_combine("Here ", is_a);
  html_div_text(c, combined);
  let on_batch = app_code_batch_on_refill(noop);
  let refresh = app_code_batch_item_get(
    c,
    lesson,
    on_batch_item,
    on_batch,
    false,
  );
  function on_batch_item(container, bs) {
    let r2 = app_code_examples_on_batch_item(container, bs);
    return r2;
  }
  async function example_another() {
    await app_shared_screen_set(context, app_code_quiz);
  }
  let r = {
    lesson,
    c,
    another,
    refresh,
    example_another,
  };
  return r;
}
