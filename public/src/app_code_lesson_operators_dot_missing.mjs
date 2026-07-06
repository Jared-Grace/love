import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_alphabet_cases_both } from "../../../love/public/src/list_alphabet_cases_both.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { each_nested_args } from "../../../love/public/src/each_nested_args.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { digit_random } from "../../../love/public/src/digit_random.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { lambda_value } from "../../../love/public/src/lambda_value.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { js_operator_dot_name } from "../../../love/public/src/js_operator_dot_name.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
export function app_code_lesson_operators_dot_missing() {
  const operator = js_operator_dot();
  const operator_name = js_operator_dot_name();
  let math_name = "property access, missing";
  let batch = function batch_get() {
    function lambda(la2) {
      let lefts = list_alphabet_cases_both();
      let rights = lefts;
      function lambda2(left5, right5) {
        lambda$left$right(left5, right5);
      }
      each_nested_args(lefts, rights, lambda2);
      function lambda$left$right(left3, right3) {
        lambda$left$right$la(left3, right3, la2);
      }
    }
    let list = list_adder(lambda);
    function lambda$left$right$la(left2, right2, la) {
      let combined = js_code_binary(left2, operator, right2);
      let right4 = digit_random();
      let combined2 = js_code_binary(left2, operator, right4);
      let combined3 = js_code_binary(right2, operator, left2);
      let left4 = digit_random();
      let combined4 = js_code_binary(left4, operator, right2);
      each([combined, combined2, combined3, combined4], la);
    }
    list_shuffle_cycled(list, 4);
    return list;
  };
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = js_code_binary("shirt", operator, "size");
    let example_get = lambda_value(combined);
    let text_before = "remember, ";
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      text_before,
      js_code_binary,
      example_get,
    );
    app_code_lesson_operators_asterisk_generic_minus(root, operator);
    app_code_lesson_operators_asterisk_generic_invalid(root, operator);
    return;
  }
  const example_label = "Is this code valid? ";
  const quiz_label = example_label;
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
    app_code_symbols_eval_valid_expression,
    2,
    app_code_symbol,
    question_label,
  );
  return r;
}
