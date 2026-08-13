import { arguments_assert } from "./arguments_assert.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparing_a_comparison_line(
  code,
  operator,
  right_value,
) {
  "the whole line as the learner reads it - 3 === 5 === false - joined from its three parts in the one place, because the lesson now shows it twice: once at the top as the line it sets out to solve, and again where the solving begins";
  "joined rather than typed out, for the reason the walkthrough already gives about its last two lines: a line typed by hand can say something the code would not do, and the two showings could then drift apart while both looked right";
  arguments_assert(arguments, 3);
  let symbol = property_get(operator, "operator");
  let right_code = js_true_false_word(right_value);
  let r = text_combine_multiple([code, " ", symbol, " ", right_code]);
  return r;
}
