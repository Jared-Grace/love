import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_not_twice_recall } from "./app_code_lesson_expression_choose_order_not_twice_recall.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_choose_order_not_twice_intro } from "./app_code_lesson_expression_choose_order_not_twice_intro.mjs";
import { app_code_lesson_expression_choose_order_not_twice_inside_first } from "./app_code_lesson_expression_choose_order_not_twice_inside_first.mjs";
import { app_code_lesson_expression_choose_order_not_twice_worked } from "./app_code_lesson_expression_choose_order_not_twice_worked.mjs";
export function app_code_lesson_expression_choose_order_not_twice_above(root) {
  "what stands above the card on the two-! lesson: the thing to remember, then the two words for how many things an operator is handed, then the rule that the inner one goes first, then the line taken down to its answer";
  "THIS ONE LESSON DOES NOT DRAW THE MACHINE WALK the rest of the run draws. The walk prints the flat line, so its rows would read !true directly under a card that had just rewritten the same line as !(!(true)) - the same steps in two spellings, with nothing on the screen saying they are the same steps. The written card carries the rewrite all the way through instead, and the walk is left to the lessons whose lines are not rewritten.";
  "Four cards rather than the run's recall, run, hinge three, because the new thing here is a pair of words and a rule about them rather than a wider line. A card apiece keeps the words, the rule and the working from being read as one long paragraph.";
  arguments_assert(arguments, 1);
  app_code_lesson_expression_choose_order_not_twice_recall(root);
  let words_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_not_twice_intro(words_card);
  let order_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_not_twice_inside_first(order_card);
  let worked_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_not_twice_worked(worked_card);
}
