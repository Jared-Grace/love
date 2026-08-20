import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_choose_order_sides_settled_tree(
  expression_parts,
  or_leftmost,
  middle_truth,
) {
  arguments_assert(arguments, 3);
  ("three trues and falses hung together into a line holding an and and an or, with the two ends settled so that reading the line the way the lesson teaches and reading it the other way part company");
  ("A false stands on the far side of the and and a true on the far side of the or, always, because those are exactly the two places that decide whether the two readings part. Drawn, they would land on a line where both readings agree most times a learner arrived - and a run on such a line shows the rule being followed and never shows what it is for.");
  ("The two settled ends are named by the operator each one stands beside, not by which end of the line they land on. So a line with the or leftmost is settled by that same sentence read the same way, and a caller asking for one does not have to know which end its true belongs at.");
  ("The one in the middle is handed in rather than drawn here, so a caller wanting the same line twice with the brackets moved gets the same three truths both times and the second line reads as the first one turned round.");
  ("How the parts are hung together is handed in as well, because that is the other thing the lessons using this differ by: one lets the operators decide the shape and the other puts brackets round the or.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  if (or_leftmost) {
    let tree_or_first = expression_parts(
      true,
      or_symbol,
      middle_truth,
      and_symbol,
      false,
    );
    return tree_or_first;
  }
  let tree_and_first = expression_parts(
    false,
    and_symbol,
    middle_truth,
    or_symbol,
    true,
  );
  return tree_and_first;
}
