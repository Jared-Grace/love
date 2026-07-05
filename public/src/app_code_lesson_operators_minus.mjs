import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { app_code_lesson_operators_generic_batch_get_unary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_unary.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { throws_not } from "../../../love/public/src/throws_not.mjs";
import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
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
export function app_code_lesson_operators_minus() {
  const operator = js_operator_minus();
  const operator_name = "minus sign";
  let math_name = "negation";
  let verb = "subtract";
  let left_transform = add;
  let batch_subtraction = app_code_lesson_operators_generic_batch_get(
    operator,
    add,
  );
  let batch = app_code_lesson_operators_generic_batch_get_unary(
    operator,
    left_transform,
  );
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
    let list2 = batch_subtraction();
    let first = list_first(list2);
    let c2 = app_code_container_light_blue(root);
    const right = "right";
    let left = "left";
    let combined3 = js_code_binary_spaced_nb(left, operator, right);
    html_div_cycle_code(c2, [
      "When " +
        verb +
        "ing two numbers, there is a number on both the left and right sides of the ",
      operator,
      " : ",
    ]);
    html_div_code_multiple(c2, [first, combined3]);
    let c3 = app_code_container_light_blue(root);
    let combined2 = digit_positive_random_operator(operator);
    html_div_cycle_code(c3, [
      "However, when making a number negative, there is only a number on right side of the ",
      operator,
      " : ",
    ]);
    let combined4 = text_combine(operator, right);
    html_div_code_multiple(c3, [combined2, combined4]);
    let c4 = app_code_container_light_blue(root);
    html_div_cycle_code_multiple(c4, [
      ["Therefore, ", operator, " must have a value on the right side"],
      [
        "And if ",
        operator,
        " does not have anything on its right side, that is invalid: ",
      ],
    ]);
    let combined5 = text_combine("invalid", operator);
    html_div_code(c4, combined5);
  }
  const example_label = "Is this valid code? ";
  const quiz_label = example_label;
  let symbols_to_answer = function lambda(symbols) {
    function lambda2() {
      eval(symbols);
    }
    let valid = throws_not(lambda2);
    let result = boolean_to_text_validity(valid);
    return result;
  };
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
