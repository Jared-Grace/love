import { app_code_lesson_expression_worked_card_two_operators } from "./app_code_lesson_expression_worked_card_two_operators.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_and_before_or_intro(root) {
  arguments_assert(arguments, 1);
  ("the two cards above the && and || in one line lesson: the rule in one sentence, then one line carried all the way to its value");
  ("Only the rule is said again, and it is said in the words the pressing lesson said it in. That the two operators can meet at all was the news there; here it is something the learner has already pressed their way through, and a card announcing it afresh would read as a second thing to learn.");
  ("What is not said again is that the other way round can give a different answer. The learner was told that where it justified the rule, and the worked line below shows it rather than saying it: the && side is false and the || saves the line anyway.");
  ("The middle step is written out as its own line - what is left after the && is done - because that is the whole of what solving in the head asks for and it is the step a learner drops when they hurry. Left out, the card would jump from a line of three parts to an answer with nothing in between.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let pair = app_code_operator_code(false_word, and_symbol, true_word);
  let whole = app_code_operator_code(pair, or_symbol, true_word);
  let rest = app_code_operator_code(false_word, or_symbol, true_word);
  app_code_container_light_blue_cycle_code(root, [
    "The ",
    and_symbol,
    " is solved before the ",
    or_symbol,
  ]);
  let heading_none = [];
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading_none,
    whole,
    pair,
    false_word,
    rest,
    true_word,
  );
}
