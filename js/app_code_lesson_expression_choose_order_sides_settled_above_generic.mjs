import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
export function app_code_lesson_expression_choose_order_sides_settled_above_generic(
  root,
  recall,
  expression_parts,
  intro,
) {
  arguments_assert(arguments, 4);
  ("what stands above the card on a lesson that shows an and and an or falling out two different ways: the thing to remember first, then one such line taken all the way down, then the sentences saying what is new");
  ("The line is built with a false on the left of the and and a true on the right of the or, and those two are settled here rather than drawn because they are exactly the two places that decide whether the two readings part. Drawn, they would land on a line where both readings agree most times a learner arrived - and a run on such a line shows the rule being followed and never shows what it is for.");
  ("The one in the middle is drawn, because it changes nothing about that and a screen that reads the same on every visit reads as a picture rather than as a line being worked out.");
  ("How the parts are hung together is handed in, because that is the only thing the two lessons using this differ by: one lets the operators decide the shape and the other puts brackets round the far side. Everything else - which two ends are settled, which one is drawn, and the three-part screen it all goes onto - was written twice and said the same thing twice.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree = expression_parts(false, and_symbol, middle_truth, or_symbol, true);
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    recall,
    tree,
    " has a true or a false on each side, and ",
    intro,
  );
}
