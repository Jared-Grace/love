import { app_code_lesson_expression_worked_card_not } from "./app_code_lesson_expression_worked_card_not.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_not_pair_intro(root) {
  arguments_assert(arguments, 1);
  ("the two cards above the ! around a joined pair lesson: what is new said in two sentences, then one line carried all the way to its value");
  ("How far a ! reaches, and why what it reaches past has to be bracketed, is NOT built up again here. The lesson that put a ! around a comparison built it a piece at a time, from what the ! would apply to without the brackets through to the finished line, and a learner arriving here has read it. Built a second time it would be a near-copy of a card they know, which reads as a new thing to learn and is not one.");
  ("So the first card says only the two things that are actually new - that what stands inside can be a whole && or ||, and that the brackets still say the ! holds all of it - and the second card shows the working rather than telling any more rules.");
  ("The worked line is the && one and it comes out true, because the pairing is what makes the ! worth watching: the part inside comes to false and the line does not. A line agreeing with the part inside it would show the ! doing nothing.");
  ("Every piece of the line is built from the marks rather than typed out, so the card cannot quietly say something the app would not print.");
  let symbol = js_operator_bang_symbol();
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let pair = app_code_operator_code(true_word, and_symbol, false_word);
  let whole = js_code_not_parenthesis_wrapped(pair);
  let not_false = js_code_not(false_word);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["A ", symbol, " can go around a whole ", and_symbol, " or ", or_symbol],
    ["The brackets say the ", symbol, " holds all of it"],
  ]);
  app_code_lesson_expression_worked_card_not(
    root,
    whole,
    pair,
    false_word,
    not_false,
    true_word,
  );
}
