import { digit_random_operator } from "../../../love/public/src/digit_random_operator.mjs";
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
  let batch = app_code_lesson_operators_generic_batch_get(add, operator);
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = digit_random_operator(operator);
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    html_div_cycle_code(c, [
      "In math and JavaScript, " +
        operator_name_math_articled +
        "can be used to make a number negative: ",
      combined,
    ]);
    let list2 = batch();
    let first = list_first(list2);
    let c2 = app_code_container_light_blue(parent);
    html_div_cycle_code(c2, [
      "When " +
        verb +
        "ing two numbers, there is a number on both sides of the ",
      operator,
      " :",
      first,
    ]);
    let combined2 = digit_random_operator(operator);
    html_div_cycle_code(c2, [
      "However, when making a number negative, there is only a number on right side of the ",
      operator,
      " :",
      combined2,
    ]);
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
