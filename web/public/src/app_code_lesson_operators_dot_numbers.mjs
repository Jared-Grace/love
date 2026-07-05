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
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { throws_not } from "../../../love/public/src/throws_not.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_generic_batch_get_binary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_binary.mjs";
import { js_operator_dot_name } from "../../../love/public/src/js_operator_dot_name.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function app_code_lesson_operators_dot_numbers() {
  const operator = js_operator_dot();
  const operator_name = js_operator_dot_name();
  let math_name = "property access, numbers";
  let left_transform = identity;
  let batch = app_code_lesson_operators_generic_batch_get_binary(
    operator,
    left_transform,
  );
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
      " with numbers",
    ]);
    html_div_text(c3, "We cannot have a number on the right:");
    let right = digit_random();
    let first = js_code_binary("invalid", operator, right);
    html_div_code(c3, first);
    html_div_text(c3, "And we cannot have a number on the left:");
    let left = digit_random();
    let first2 = js_code_binary(left, operator, "invalid");
    html_div_code(c3, first2);
    return;
    app_code_lesson_operators_asterisk_generic_minus(root, operator);
    app_code_lesson_operators_asterisk_generic_invalid(root, operator);
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
