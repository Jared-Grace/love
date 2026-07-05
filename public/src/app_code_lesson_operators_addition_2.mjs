import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { digit_positive_random_operator } from "../../../love/public/src/digit_positive_random_operator.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_addition_2() {
  const operator = "-";
  const operator_name = "minus sign";
  let math_name = "negation";
  let verb = "subtract";
  let batch = app_code_lesson_operators_generic_batch_get(operator, add);
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = digit_positive_random_operator(operator);
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    html_div_cycle_code(c, [
      "In math and JavaScript, " +
        operator_name_math_articled +
        "can be used to make a number negative: ",
      combined,
    ]);
    let list2 = batch();
    let first = list_first(list2);
    let c2 = app_code_container_light_blue(root);
    let combined3 = js_code_binary_spaced_nb("left", operator, "right");
    html_div_cycle_code(c2, [
      "When " +
        verb +
        "ing two numbers, there is a number on both the left and right sides of the ",
      operator,
      " : ",
    ]);
    html_div_code_multiple(c2, [first, combined3]);
    let combined2 = digit_positive_random_operator(operator);
    html_div_cycle_code(c2, [
      "However, when making a number negative, there is only a number on right side of the ",
      operator,
      " : ",
    ]);
    let combined4 = text_combine(operator, "right_only");
    html_div_code_multiple(c2, [combined2, combined4]);
  }
  const example_label = "Value of code: ";
  const quiz_label = "What is the value of this code? ";
  let symbols_to_answer = eval;
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let question_label = "Code: ";
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    batch,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol,
    question_label,
  );
  return r;
}
