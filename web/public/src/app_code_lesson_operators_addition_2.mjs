import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function app_code_lesson_operators_addition_2() {
  const operator = "+";
  const operator_name = "plus sign";
  let math_name = "addition";
  let verb = "add";
  function above(root) {
    let c = app_code_container_light_blue(root);
    let list2 = batch();
    let first = list_first(list2);
    let replaced = text_replace(first, operator, operator);
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    html_div_cycle_code(c, [
      "In math, " +
        operator_name_math_articled +
        "can be used to " +
        verb +
        " numbers: ",
      replaced,
    ]);
    let ne = equal_not(operator, operator);
    if (ne) {
      c = app_code_container_light_blue(root);
      app_code_lesson_underscores_define_symbol(c, operator_name, operator);
      html_div_cycle_code(c, [
        "In JavaScript, we do not use" + operator_name_math_articled,
        operator,
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
      operator,
      " symbol can be used to " + verb + " two numbers",
    ]);
  }
  const example_label = "Value of code: ";
  const quiz_label = "What is the value of this code? ";
  let max = 7;
  let symbols_to_answer = eval;
  function batch() {
    let lefts = range_1(max);
    let rights = range_1(max);
    function lambda4(la) {
      function lambda3(left, right) {
        let transformed = identity(left, right);
        let list3 = list_between_space_nb([transformed, operator, right]);
        let combined = text_combine_multiple(list3);
        la(combined);
      }
      each_nested_distinct(lefts, rights, lambda3);
    }
    let list = list_adder(lambda4);
    list_shuffle(list);
    return list;
  }
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
    1,
    app_code_symbol,
    question_label,
  );
  return r;
}
