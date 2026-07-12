import { property_get } from "./property_get.mjs";
import { text_articled_pad_space } from "./text_articled_pad_space.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_lesson_operators_generic_batch_get } from "./app_code_lesson_operators_generic_batch_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { word_add_ing } from "./word_add_ing.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "./app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides_number(
  root,
  operator,
  left_transform,
  verb,
) {
  app_code_lesson_operators_minus_generic_container_both_sides(
    root,
    operator,
    text_combine_multiple([
      "when ",
      word_add_ing(verb),
      " two numbers",
      " there is ",
      text_articled_pad_space("number"),
    ]),
    js_code_binary_spaced_nb,
    example_get,
  );
  function example_get() {
    let batch_binary = app_code_lesson_operators_generic_batch_get(
      operator,
      left_transform,
    );
    let list = batch_binary();
    let first = list_first(list);
    let question = property_get(first, "question");
    return question;
  }
}
