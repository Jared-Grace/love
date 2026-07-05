import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_map_property_to } from "../../../love/public/src/list_map_property_to.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { list_to_and_list } from "../../../love/public/src/list_to_and_list.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_span_text_padded_space } from "../../../love/public/src/html_span_text_padded_space.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
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
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_generic_batch_get_unary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_unary.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { js_operator_dot_name } from "../../../love/public/src/js_operator_dot_name.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { js_operator_multiplication } from "../../../love/public/src/js_operator_multiplication.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
export function app_code_lesson_operators_dot() {
  const operator = js_operator_dot();
  const operator_name = js_operator_dot_name();
  let math_name = "property access";
  let verb = js_operator_minus_verb();
  let sign = "negative";
  let left_transform = add;
  let batch_binary = app_code_lesson_operators_generic_batch_get(
    operator,
    left_transform,
  );
  let batch = app_code_lesson_operators_generic_batch_get_unary(
    operator,
    left_transform,
  );
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = text_combine_right_fn(operator, digit_positive_random);
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    let d = html_div_cycle_code(c, [
      "In JavaScript, " + operator_name_math_articled + " ",
      operator,
      " is a symbol like: ",
    ]);
    let p = js_operator_plus();
    let r2 = js_operator_minus();
    let r22 = js_operator_multiplication();
    let r23 = js_operator_division();
    const operators_text = [p, r2, r22, r23];
    let mapped = list_map_property_to(operators_text, "operator");
    let concated = list_to_and_list(mapped);
    function lambda4(item) {
      let condition = text_is(item);
      let result = ternary(
        condition,
        html_span_text_padded_space,
        html_span_text_code_dark,
      );
      if (not(condition)) {
        item = property_get(item, "operator");
      }
      result(d, item);
    }
    each(concated, lambda4);
    let list2 = batch_binary();
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
    html_div_cycle_code(c3, [
      "However, when making a number " +
        sign +
        ", there is only a number on right side of the ",
      operator,
      " : ",
    ]);
    let combined2 = text_combine_right_fn(operator, digit_positive_random);
    let combined4 = text_combine(operator, right);
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
