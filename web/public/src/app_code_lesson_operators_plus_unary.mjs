import { js_operator_plus_name } from "../../../love/public/src/js_operator_plus_name.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
import { digit_negative_random_parenthesis_wrapped } from "../../../love/public/src/digit_negative_random_parenthesis_wrapped.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_generic_batch_get_unary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_unary.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_plus_unary() {
  const operator = js_operator_plus();
  const operator_name = js_operator_plus_name();
  let math_name = "Plus sign unary";
  let sign = "positive";
  let left_transform = add;
  let batch = app_code_lesson_operators_generic_batch_get_unary(
    operator,
    left_transform,
  );
  function above(root) {
    let c = app_code_container_light_blue(root);
    let combined = text_combine_right_fn(
      operator,
      digit_negative_random_parenthesis_wrapped,
    );
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    html_div_cycle_code(c, [
      "In math and JavaScript, " +
        operator_name_math_articled +
        "can be used to make a number " +
        sign +
        ": ",
      combined,
    ]);
  }
  const example_label = "Is this code valid? ";
  const quiz_label = example_label;
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
    2,
    app_code_symbol,
    question_label,
  );
  return r;
}
