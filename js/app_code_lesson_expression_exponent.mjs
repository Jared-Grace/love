import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_expression_repeated_generic } from "./app_code_lesson_expression_repeated_generic.mjs";
export function app_code_lesson_expression_exponent() {
  "practice a ** b (exponent) by writing it out as repeated multiplication (2 ** 3 becomes 2 * 2 * 2): the quiz matches the ** form with its expansion, because this lesson teaches what ** MEANS - repeated multiplication - not the arithmetic value; base 2..5, exponent 2..3 for the drawn questions";
  "The two worked examples are 4 ** 3 and 3 ** 5, chosen rather than drawn and different from the 2 ** 3 and 5 ** 4 the walkthrough above them already wrote out, and they move both numbers between them - the base and how many of it - so a learner reading only the examples sees that both are free. The drawn questions take the two bases those did not use.";
  "3 ** 5 comes to two hundred and forty three and that does not matter: nothing on this lesson ever asks what the line comes to, only what it is written out as. The one thing the larger exponent buys is a fifth 3 in the written-out form, which is a length neither the walkthrough nor anything drawn ever reaches.";
  let operator = js_operator_double_asterisk();
  let expand_symbol = js_operator_asterisk_symbol();
  let lesson = app_code_lesson_expression_repeated_generic({
    operator,
    expand_symbol,
    noun: "multiplication",
    noun_upper: "Multiplication",
    verb: "multiply",
    title_word: "Exponent ",
    right_word: "exponent",
    examples: [
      [4, 3],
      [3, 5],
    ],
  });
  return lesson;
}
