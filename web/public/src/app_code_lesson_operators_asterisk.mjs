import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_multiplication_verb } from "../../../love/public/src/js_operator_multiplication_verb.mjs";
import { js_operator_multiplication } from "../../../love/public/src/js_operator_multiplication.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { throws_not } from "../../../love/public/src/throws_not.mjs";
import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_generic_batch_get_unary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_unary.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_asterisk() {
  const operator = js_operator_multiplication();
  let lesson_name = "asterisk";
  let verb = js_operator_multiplication_verb();
  let sign = "negative";
  let left_transform = add;
  let batch = app_code_lesson_operators_generic_batch_get_unary(
    operator,
    left_transform,
  );
  function above(root) {
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      verb,
      left_transform,
    );
    let c3 = app_code_container_light_blue(root);
    let minus = js_operator_minus();
    html_div_cycle_code(c3, [
      "Remember, for ",
      minus,
      " it's possible to have a number only on the right and not on the left: ",
    ]);
    let combined2 = text_combine_right_fn(minus, digit_positive_random);
    const right2 = "right";
    let combined4 = text_combine(minus, right2);
    html_div_code_multiple(c3, [combined2, combined4]);
    html_div_cycle_code(c3, ["However we cannot do this for ", operator]);
    let c4 = app_code_container_light_blue(root);
    let combined = text_combine("invalid", operator);
    let combined3 = text_combine(operator, "invalid");
    html_div_cycle_code_multiple(c4, [
      [
        "Therefore, ",
        operator,
        " must have values both on the left side and the right side",
      ],
      [
        "So if ",
        operator,
        " does not have anything on its right side, then that is invalid code: ",
      ],
      ["", combined],
      [
        "And if ",
        operator,
        " does not have anything on its left side, then that is invalid code: ",
      ],
      ["", combined3],
    ]);
  }
  const example_label = "Is this code valid? ";
  const quiz_label = example_label;
  let symbols_to_answer = function lambda(symbols) {
    function lambda2() {
      eval(symbols);
    }
    let valid = throws_not(lambda2);
    let result = boolean_to_text_validity(valid);
    return result;
  };
  let inside = text_first_upper_to(lesson_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + lesson_name;
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
    2,
    app_code_symbol,
    question_label,
  );
  return r;
}
