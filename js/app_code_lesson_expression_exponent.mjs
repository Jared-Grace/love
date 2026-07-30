import { app_code_lesson_expression_repeated_generic } from "./app_code_lesson_expression_repeated_generic.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
export function app_code_lesson_expression_exponent() {
  "practice a ** b (exponent) by writing it out as repeated multiplication (2 ** 3 becomes 2 * 2 * 2): the quiz matches the ** form with its expansion, because this lesson teaches what ** MEANS - repeated multiplication - not the arithmetic value; base 2..5, exponent 2..3";
  let operator = js_operator_double_asterisk();
  let expand_symbol = js_operator_asterisk_symbol();
  let lesson = app_code_lesson_expression_repeated_generic({
    operator,
    expand_symbol,
    noun: "multiplication",
    noun_upper: "Multiplication",
    verb: "multiply",
    title_word: "Exponent ",
    right_word: " exponent",
  });
  return lesson;
}
