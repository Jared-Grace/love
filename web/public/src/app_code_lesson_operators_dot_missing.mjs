import { list_alphabet_cases_both } from "../../../love/public/src/list_alphabet_cases_both.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { each_nested_args } from "../../../love/public/src/each_nested_args.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { number_pi_truncated_text } from "../../../love/public/src/number_pi_truncated_text.mjs";
import { digit_random } from "../../../love/public/src/digit_random.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { lambda_value } from "../../../love/public/src/lambda_value.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_operators_arithmetic } from "../../../love/public/src/app_code_operators_arithmetic.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
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
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    let c4 = app_code_container_light_blue(root);
    let div = html_div_cycle_code(c4, [
      "In JavaScript, " + operator_name_math_articled + " ",
      operator,
      " can be used in numbers as a decimal point:",
    ]);
    let first3 = number_pi_truncated_text();
    html_div_code(c4, first3);
    let c = app_code_container_light_blue(root);
    let d = html_div_cycle_code(c, [
      "Besides decimal points, ",
      operator,
      " is a symbol that can be used like: ",
    ]);
    app_code_operators_arithmetic(d);
    let c2 = app_code_container_light_blue(root);
    let d2 = html_div_text(c2, "We can use ");
    app_code_operators_arithmetic(d2);
    html_span_text(d2, " with numbers");
    html_div_cycle_code(c2, [
      "And we can use ",
      operator,
      " with identifiers:",
    ]);
    html_div_code_multiple(c2, ["person.name", "book.chapters"]);
    let combined = js_code_binary("shirt", operator, "size");
    let example_get = lambda_value(combined);
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      "There must be something",
      js_code_binary,
      example_get,
    );
    let c3 = app_code_container_light_blue(root);
    html_div_cycle_code(c3, [
      "However, we cannot directly use ",
      operator,
      " with both an identifier and a number",
    ]);
    html_div_text(c3, "We cannot have a number on the right:");
    let right = digit_random();
    let first = js_code_binary("invalid", operator, right);
    html_div_code(c3, first);
    html_div_text(c3, "And we cannot have a number directly on the left:");
    let left = digit_random();
    let first2 = js_code_binary(left, operator, "invalid");
    html_div_code(c3, first2);
    return;
    app_code_lesson_operators_asterisk_generic_minus(root, operator);
    app_code_lesson_operators_asterisk_generic_invalid(root, operator);
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
