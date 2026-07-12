import { app_code_lesson_validity_operator } from "./app_code_lesson_validity_operator.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { list_shuffle_cycled } from "./list_shuffle_cycled.mjs";
import { each } from "./each.mjs";
import { text_left_right_middle_random_space_nb } from "./text_left_right_middle_random_space_nb.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { each_nested_args_range_1_list_adder } from "./each_nested_args_range_1_list_adder.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides_number } from "./app_code_lesson_operators_minus_generic_container_both_sides_number.mjs";
import { text_combine_right_fn } from "./text_combine_right_fn.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
import { throws_not } from "./throws_not.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code_multiple } from "./html_div_cycle_code_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_code_multiple } from "./html_div_code_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_articled_pad_space } from "./text_articled_pad_space.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_operators_minus_generic(
  operator,
  left_transform,
  operator_name,
  sign,
  verb,
  math_name,
  right_random_get,
) {
  let max = app_code_lesson_operators_value_max();
  function batch_get() {
    let list = each_nested_args_range_1_list_adder(max, lambda$left$right$la);
    function lambda$left$right$la(left, right, la) {
      let transformed = left_transform(left, right);
      let combined6 = js_code_binary_spaced_nb(transformed, operator, right);
      let combined22 = text_left_right_middle_random_space_nb(left, operator);
      let combined3 = text_combine(operator, right);
      let combined42 = text_left_right_middle_random_space_nb(right, operator);
      each([combined6, combined22, combined3, combined42], la);
    }
    list_shuffle_cycled(list, 4);
    return list;
  }
  let symbols_to_answer = function lambda(symbols) {
    function lambda2() {
      eval(symbols);
    }
    let valid = throws_not(lambda2);
    let result = boolean_to_text_validity(valid);
    return result;
  };
  let batch = app_code_batch_question_answer_fns(batch_get, symbols_to_answer);
  function above(root) {
    let combined = text_combine_right_fn(operator, right_random_get);
    let operator_name_math_articled = text_articled_pad_space(operator_name);
    app_code_container_light_blue_cycle_code(root, [
      text_combine_multiple([
        "In math and JavaScript, ",
        operator_name_math_articled,
        "can be used to make a number ",
        sign,
        ": ",
      ]),
      combined,
    ]);
    app_code_lesson_operators_minus_generic_container_both_sides_number(
      root,
      operator,
      left_transform,
      verb,
    );
    let c3 = app_code_container_light_blue(root);
    html_div_cycle_code(c3, [
      text_combine_multiple([
        "However, when making a number ",
        sign,
        ", there is only a number on right side of the ",
      ]),
      operator,
      " : ",
    ]);
    let combined2 = text_combine_right_fn(operator, right_random_get);
    let right2 = "right";
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
  let lesson = app_code_lesson_validity_operator(math_name, batch, above);
  return lesson;
}
