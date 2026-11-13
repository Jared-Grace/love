import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_current } from "./app_learn_js_lesson_current.mjs";
import { app_learn_js_lesson_title_strip } from "./app_learn_js_lesson_title_strip.mjs";
import { app_learn_js_lesson_above_shown } from "./app_learn_js_lesson_above_shown.mjs";
import { app_learn_js_above_draw } from "./app_learn_js_above_draw.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_example_answer_gap } from "./app_learn_js_example_answer_gap.mjs";
import { app_learn_js_lesson_text_example_another } from "./app_learn_js_lesson_text_example_another.mjs";
import { app_learn_js_lesson_examples_plural_is } from "./app_learn_js_lesson_examples_plural_is.mjs";
import { app_learn_js_lesson_examples_complete_is } from "./app_learn_js_lesson_examples_complete_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_js_lesson_examples_guided_is } from "./app_learn_js_lesson_examples_guided_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_batch_on_refill } from "./app_learn_js_batch_on_refill.mjs";
import { noop } from "./noop.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_items_steps_fewest } from "./app_learn_js_items_steps_fewest.mjs";
import { property_set } from "./property_set.mjs";
import { app_learn_js_batch_item_get } from "./app_learn_js_batch_item_get.mjs";
import { app_learn_js_examples_on_batch_item } from "./app_learn_js_examples_on_batch_item.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_learn_js_quiz } from "./app_learn_js_quiz.mjs";
export function app_learn_js_examples_example_another(context, root) {
  arguments_assert(arguments, 2);
  let lesson = app_learn_js_lesson_current(context);
  app_learn_js_lesson_title_strip(root, context, lesson);
  let above = app_learn_js_lesson_above_shown(context, lesson);
  let above_line = app_learn_js_above_draw(root, above, context);
  let c = app_learn_js_container_light_blue(root);
  app_learn_js_example_answer_gap(c);
  let another = app_learn_js_lesson_text_example_another(lesson);
  let plural = app_learn_js_lesson_examples_plural_is(lesson);
  let complete = app_learn_js_lesson_examples_complete_is(lesson);
  ("A lesson whose examples are every example it has says THE rather than SOME. Some names a sample, and a reader who is told they have been shown some goes looking for the rest - which is the very promise the see-more button makes and the very one such a lesson cannot keep. The word and the button are written from the one answer here, so neither can say what the other denies.");
  let root_word = "example";
  let is_a = null;
  if (plural) {
    let word_many = "are some ";
    if (complete) {
      word_many = "are the ";
    }
    is_a = text_combine_multiple([word_many, root_word, "s:"]);
  } else {
    let word_one = "is an ";
    if (complete) {
      word_one = "is the ";
    }
    is_a = text_combine_multiple([word_one, root_word, ":"]);
  }
  let guided = app_learn_js_lesson_examples_guided_is(lesson);
  if (guided) {
    ("the human's words 2026-10-14");
    is_a = "is an example that guides you step-by-step:";
  }
  let combined = text_combine("Here ", is_a);
  html_div_text(c, combined);
  let on_batch = app_learn_js_batch_on_refill(noop);
  ("2026-11-13, at the human's asking: a guided example is drawn from only the questions of its set that take the fewest steps, since each press past the first few runs of a loop repeats the ones before; the quizzes still draw from the whole set");
  let lesson_drawn = lesson;
  if (guided) {
    lesson_drawn = object_copy(lesson);
    let batch_whole = property_get(lesson, "batch");
    function batch_fewest() {
      let items = batch_whole();
      let kept = app_learn_js_items_steps_fewest(items);
      return kept;
    }
    property_set(lesson_drawn, "batch", batch_fewest);
  }
  let refresh = app_learn_js_batch_item_get(
    c,
    lesson_drawn,
    on_batch_item,
    on_batch,
    false,
    above_line,
  );
  function on_batch_item(container, bs) {
    let r2 = app_learn_js_examples_on_batch_item(container, bs);
    return r2;
  }
  async function example_another() {
    await app_shared_screen_set(context, app_learn_js_quiz);
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
