import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_left_right_middle_random_space_nb } from "../../../love/public/src/text_left_right_middle_random_space_nb.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { each_nested_args_range_1_list_adder } from "../../../love/public/src/each_nested_args_range_1_list_adder.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides_number } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides_number.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
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
export function app_code_lesson_operators_minus_generic(
  operator,
  left_transform,
  operator_name,
  sign,
  verb,
  math_name,
  right_random_get,
) {
  let max = app_code_lesson_operators_generic_batch_get_max();
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
    app_code_lesson_operators_minus_generic_container_both_sides_number(
      root,
      operator,
      left_transform,
      verb,
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
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let question_label = app_code_label_code_question();
  let example_count = 2;
  let quiz_backwards_label_answer = null;
  let on_quiz_answer_button_backwards = null;
  let quiz_backwards_answer_count_override = null;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    html_text_set,
    question_label,
    batch,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    quiz_backwards_answer_count_override,
    "Identifier validity: ",
    noop,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch,
    html_text_set,
    example_label,
    quizzes,
    question_label,
  );
  return lesson;
}
