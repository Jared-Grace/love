import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_not_parenthesis_shape } from "./app_code_not_parenthesis_shape.mjs";
export function app_code_lesson_expression_choose_order_not_intro(parent) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("PARENTHESES, never parentheses. The marks on the line are ( and ), and in this language [ and ] are a different symbol doing a different job - so a card that called these parentheses would be teaching a word the learner has to unlearn the first time they meet a list.");
  ("THE FIRST LINE DRAWS THE SHAPE rather than describing it. A sentence saying a ! can stand in front of a whole comparison asks the learner to picture the line; the shape !( ... ) is that picture, already drawn, with a grey gap standing where the comparison goes. It is the same shape, from the same one place, that the later joined-pair lesson opens on, so the two cards are recognisably one picture.");
  ("Then what the parentheses mean, then the order that follows from it. They are different facts - one says what the ! is applied to, the other says when - and a learner can hold the first and still get the second wrong, so they are two lines rather than one sentence carrying both.");
  ("Said as what the ! is applied to rather than as a rule about strength. A learner who has been told the ! is applied to the solved value can see for themselves why it cannot go first, and they are reading the same rule they have read on every line before this one - a part is ready when nothing is left inside it.");
  let symbol = js_operator_bang_symbol();
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let opened = text_combine(left_parenthesis, " ");
  let marks = text_combine(opened, right_parenthesis);
  let row_shape = html_div_cycle_code(parent, [
    "",
    symbol,
    " can be in front of parenthesis ",
    marks,
    " like this: ",
  ]);
  app_code_not_parenthesis_shape(row_shape);
  html_div_cycle_code(parent, [
    "The parenthesis means: solve what's inside the parenthesis, first, and then apply ",
    symbol,
    " to the solved value",
  ]);
  html_div_cycle_code(parent, [
    "So what's inside the parenthesis is solved, first and then ",
    symbol,
    " applies to that solved value",
  ]);
}
