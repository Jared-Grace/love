import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { app_code_lesson_expression_worked_card_not } from "./app_code_lesson_expression_worked_card_not.mjs";
export function app_code_lesson_expression_not_pair_intro(root) {
  arguments_assert(arguments, 1);
  ("the two cards above the ! around a joined pair lesson: what is new said as three shapes, then one line carried all the way to its value");
  ("How far a ! reaches, and why what it reaches past has to be gathered into parentheses, is NOT built up again here. The lesson that put a ! around a comparison built it a piece at a time, from what the ! would apply to without the parentheses through to the finished line, and a learner arriving here has read it. Built a second time it would be a near-copy of a card they know, which reads as a new thing to learn and is not one.");
  ("So the first card DRAWS the shape rather than describing it. Three lines, each one a piece of punctuation with a gap standing where the parts go: the ! outside a pair of parentheses, then an && inside them, then an || inside them. A learner matching the line in front of them against a shape can tell in a glance whether it is one of these; a learner matching it against a sentence about what may stand where has to translate first.");
  ("The gap is drawn as three dots in the very style the home list paints a lesson title in, because that is where the learner has already met a shape with the parts left out - the title of this lesson is that same shape. The card and the title are then the same picture, which is what makes the home list readable as a table of contents rather than as a list of words.");
  ("Both joining marks get a line of their own. A card showing only the && one would leave a learner to work out whether the || is allowed there too, and the whole point of drawing a shape is that nothing about it has to be worked out.");
  ("The second card shows the working rather than telling any more rules. The worked line is the && one and it comes out true, because the pairing is what makes the ! worth watching: the part inside comes to false and the line does not. A line agreeing with the part inside it would show the ! doing nothing.");
  ("Every piece of the line is built from the marks rather than typed out, so the card cannot quietly say something the app would not print.");
  ("PARENTHESES, never parentheses. The marks on the line are ( and ), and in this language [ and ] are a different symbol doing a different job - so a card that called these parentheses would be teaching a word the learner has to unlearn the first time they meet a list.");
  let symbol = js_operator_bang_symbol();
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let pair = app_code_operator_code(true_word, and_symbol, false_word);
  let whole = js_code_not_parenthesis_wrapped(pair);
  let not_false = js_code_not(false_word);
  let dots = "...";
  let not_shape = js_code_not_parenthesis_wrapped(dots);
  let inside = app_code_operator_code(dots, and_symbol, dots);
  let and_shape = js_code_wrap_parenthesis(inside);
  let inside2 = app_code_operator_code(dots, or_symbol, dots);
  let or_shape = js_code_wrap_parenthesis(inside2);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["", symbol, " can go in front of parenthesis: ", not_shape],
    ["", and_symbol, " could be inside those parenthesis: ", and_shape],
    ["Or ", or_symbol, " could be inside those parenthesis: ", or_shape],
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
