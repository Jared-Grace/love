import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_expression_repeated_generic } from "./app_code_lesson_expression_repeated_generic.mjs";
export function app_code_lesson_expression_multiply() {
  "practice a * b (multiply) by writing it out as repeated addition (2 * 3 becomes 2 + 2 + 2): the quiz matches the * form with its expansion, because this lesson teaches what * MEANS - repeated addition - not the arithmetic value; left number 2..5, count 2..3 for the drawn questions";
  "The two worked examples are 2 * 3 and 5 * 4, chosen rather than drawn. Both numbers move between them - the number being added and how many of it - so a learner reading only the examples sees that both are free. The drawn questions take the two left numbers those did not use.";
  "5 * 4 puts a fourth 5 in the written-out form, which nothing drawn ever does. What is being taught is the writing out and not the answer, so a longer line costs the learner nothing and shows the count going past the length they had been shown.";
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
    examples: [
      [2, 3],
      [5, 4],
    ],
  });
  return lesson;
}
