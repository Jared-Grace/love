import { app_code_lesson_expression_repeated_generic } from "./app_code_lesson_expression_repeated_generic.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_multiply() {
  "practice a * b (multiply) by writing it out as repeated addition (2 * 3 becomes 2 + 2 + 2): the quiz matches the * form with its expansion, because this lesson teaches what * MEANS - repeated addition - not the arithmetic value; value 2..5, count 2..3";
  let operator = js_operator_asterisk();
  let expand_symbol = js_operator_plus_symbol();
  let lesson = app_code_lesson_expression_repeated_generic({
    operator,
    expand_symbol,
    noun: "addition",
    noun_upper: "Addition",
    verb: "add",
    title_word: "Multiply ",
    right_word: "multiply",
  });
  return lesson;
}
