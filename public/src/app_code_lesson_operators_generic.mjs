import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_generic(
  operator_js,
  operator_math,
  operator_name_js,
  operator_name_math,
  verb,
  math_name,
  left_transform,
) {
  function above(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_underscores_define_symbol(
      c,
      operator_name_math,
      operator_math,
    );
    let list2 = batch();
    let first = list_first(list2);
    let replaced = text_replace(first, operator_js, operator_math);
    const operator_name_math_articled =
      text_articled_pad_space(operator_name_math);
    html_div_cycle_code(c, [
      "In math, " +
        operator_name_math_articled +
        "can be used to " +
        verb +
        " numbers: ",
      replaced,
    ]);
    let ne = equal_not(operator_js, operator_math);
    if (ne) {
      c = app_code_container_light_blue(root);
      app_code_lesson_underscores_define_symbol(
        c,
        operator_name_js,
        operator_js,
      );
      html_div_cycle_code(c, [
        "In JavaScript, we do not use" + operator_name_math_articled,
        operator_math,
        " to " + verb + " numbers",
      ]);
    }
    let t = null;
    if (ne) {
      t = "Instead";
    } else {
      t = "In JavaScript";
    }
    html_div_cycle_code(c, [
      t + ", the ",
      operator_js,
      " symbol can be used to " + verb + " two numbers",
    ]);
  }
  const example_label = "Value of code: ";
  const quiz_label = "What is the value of this code? ";
  let max = 7;
  let symbols_to_answer = eval;
  let batch = app_code_lesson_operators_generic_batch_get(
    left_transform,
    operator_js,
  );
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let question_label = "Code: ";
  let r5 = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    batch,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol,
    question_label,
  );
  return r5;
}
