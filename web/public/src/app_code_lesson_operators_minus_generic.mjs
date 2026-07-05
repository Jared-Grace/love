import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { throws_not } from "../../../love/public/src/throws_not.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_generic_batch_get_binary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_binary.mjs";
export function app_code_lesson_operators_minus_generic(
  operator,
  left_transform,
  operator_name,
  sign,
  verb,
  math_name,
  right_random_get,
) {
  let batch = app_code_lesson_operators_generic_batch_get_binary(
    operator,
    left_transform,
  );
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = text_combine_right_fn(operator, right_random_get);
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    html_div_cycle_code(c, [
      "In math and JavaScript, " +
        operator_name_math_articled +
        "can be used to make a number " +
        sign +
        ": ",
      combined,
    ]);
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      verb,
      left_transform,
    );
    let c3 = app_code_container_light_blue(root);
    html_div_cycle_code(c3, [
      "However, when making a number " +
        sign +
        ", there is only a number on right side of the ",
      operator,
      " : ",
    ]);
    let combined2 = text_combine_right_fn(operator, right_random_get);
    const right2 = "right";
    let combined4 = text_combine(operator, right2);
    html_div_code_multiple(c3, [combined2, combined4]);
    let c4 = app_code_container_light_blue(root);
    html_div_cycle_code_multiple(c4, [
      ["Therefore, ", operator, " must have a value on the right side"],
      [
        "And if ",
        operator,
        " does not have anything on its right side, then that is invalid code: ",
      ],
    ]);
    let combined5 = text_combine("invalid", operator);
    html_div_code(c4, combined5);
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
    2,
    app_code_symbol,
    question_label,
  );
  return r;
}
