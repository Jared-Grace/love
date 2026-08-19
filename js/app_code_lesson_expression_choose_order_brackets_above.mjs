import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_brackets_expression_parts } from "./app_code_lesson_expression_choose_order_brackets_expression_parts.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_recall } from "./app_code_lesson_expression_choose_order_brackets_recall.mjs";
import { app_code_lesson_expression_choose_order_brackets_intro } from "./app_code_lesson_expression_choose_order_brackets_intro.mjs";
export function app_code_lesson_expression_choose_order_brackets_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the brackets lesson: the two rules being brought together, then one bracketed line taken all the way down, then the sentences saying what is new");
  ("The line run through is one the brackets change the answer of - a false on the left of the && and a true on the right of the || . Read the way the brackets ask it comes to false; read as though they were not there it comes to true. A run on a line where both readings agree would show the brackets being obeyed and never show what obeying them is worth.");
  ("Which is why the first and the last are settled here rather than drawn: those are exactly the two places that decide whether the readings part. The one in the middle is drawn, because it changes nothing about that and a screen that reads the same on every visit reads as a picture rather than as a line being worked out.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let both = [true, false];
  let inner_left_truth = list_random_item(both);
  let tree = app_code_lesson_expression_choose_order_brackets_expression_parts(
    false,
    and_symbol,
    inner_left_truth,
    or_symbol,
    true,
  );
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_brackets_recall,
    tree,
    " has a true or a false on each side, and ",
    app_code_lesson_expression_choose_order_brackets_intro,
  );
}
