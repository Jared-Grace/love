import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { word_add_ing } from "../../../love/public/src/word_add_ing.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides_number(
  root,
  operator,
  left_transform,
  verb,
) {
  app_code_lesson_operators_minus_generic_container_both_sides(
    root,
    operator,
    "when " +
      word_add_ing(verb) +
      " two numbers" +
      " there is" +
      text_articled_pad_space(noun),
    "number",
    js_code_binary_spaced_nb,
    example_get,
  );
  function example_get() {
    let batch_binary = app_code_lesson_operators_generic_batch_get(
      operator,
      left_transform,
    );
    let list2 = batch_binary();
    let first = list_first(list2);
    return first;
  }
}
