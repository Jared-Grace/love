import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
export function app_code_lesson_operators_addition() {
  const operator = "+";
  const operator_name = "plus";
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_underscores_define_symbol(
      c,
      operator_name + " sign",
      operator,
    );
    let div = html_div_text_multiple(c, [
      "In math, we use plus signs to add numbers together",
      "In JavaScript, a plus sign can add two numbers together",
    ]);
  }
  const example_label = "Value of code: ";
  const quiz_label = "What is the value of this code? ";
  let max = 10;
  let symbols_to_answer = eval;
  function lambda2() {
    let lefts = range_1(max);
    let rights = range_1(max);
    function lambda4(la) {
      function lambda3(left, right) {
        let combined = text_combine_multiple([left, operator, right]);
        la(combined);
      }
      each_nested_distinct(lefts, rights, lambda3);
    }
    let list = list_adder(lambda4);
    list_shuffle(list);
    return list;
  }
  let name = "Operators (Addition)";
  let id = "operators_addition";
  let question_label = "Code: ";
  let r5 = app_code_lesson_symbols_batches_generic(
    name,
    id,
    lambda,
    noop,
    lambda2,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol,
    question_label,
  );
  return r5;
}
