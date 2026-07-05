import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
import { js_code_negation_parenthesis_wrapped } from "../../../love/public/src/js_code_negation_parenthesis_wrapped.mjs";
import { list_adder_each } from "../../../love/public/src/list_adder_each.mjs";
import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
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
export function app_code_lesson_operators_plus_unary() {
  const operator = js_operator_plus();
  const operator_name = js_operator_plus_name();
  let math_name = "Plus sign unary";
  let sign = "positive";
  let batch = function batch_get() {
    let dps = digits_positive();
    let list = list_adder_each(dps, on_each);
    function on_each(la, item) {
      let combined2 = text_combine(operator, wrapped);
      let combined5 = text_combine(operator, item);
      let wrapped = js_code_negation_parenthesis_wrapped(item);
      each([combined2, combined5], la);
    }
    list_shuffle_cycled(list, 2);
    return list;
  };
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
  let question_label = app_code_label_code_question();
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
