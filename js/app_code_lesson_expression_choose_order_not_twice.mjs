import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_not_twice_title_name_id } from "./app_code_lesson_expression_choose_order_not_twice_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_not_twice_questions } from "./app_code_lesson_expression_choose_order_not_twice_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_not_twice_above } from "./app_code_lesson_expression_choose_order_not_twice_above.mjs";
export function app_code_lesson_expression_choose_order_not_twice() {
  "a true or a false with two ! symbols in front of it, taken a press at a time: !!true, choose the nearer ! , choose what it comes to, then choose the other ! and what that comes to";
  "IT COMES BEFORE THE LESSON THAT READS !! , not after it, which is the order every other pair in this run is in. The press-at-a-time lesson is where a shape is met, one part at a time and with the learner saying which part may go; the lesson after it is where whole lines of that shape are read at a glance. Meeting the shape whole first and only then being asked to take it apart would be the harder of the two orders and is not the one the run uses anywhere else.";
  "The smallest line in the whole run: two operators and one value, and no parentheses anywhere. Every other press-at-a-time line has an operator with something on each side of it, so which part was ready could be read off what sat beside it. Here there is nothing beside anything - the only thing to read is which ! is nearer the value - and that is the plainest instance of the one rule the run has been asking for all along.";
  "BOTH SYMBOLS ARE THE SAME SYMBOL, which is why this is a good place to ask it. A learner who has been reading which operator goes first as a fact about which symbol is stronger cannot answer here at all, because the two symbols are equally strong; the only reading that works is the one the run wants, that a part is ready when nothing is left inside it.";
  "Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.";
  arguments_assert(arguments, 0);
  let name_id =
    app_code_lesson_expression_choose_order_not_twice_title_name_id();
  let bank = app_code_lesson_expression_choose_order_not_twice_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_not_twice_above,
    bank,
  );
  return lesson;
}
