import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_sides_settled_tree } from "./app_code_lesson_expression_choose_order_sides_settled_tree.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_truths_step_sides } from "./app_code_lesson_expression_choose_order_truths_step_sides.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_either_side } from "./app_code_lesson_expression_choose_order_and_before_or_either_side.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
import { app_code_lesson_expression_choose_order_run_cards } from "./app_code_lesson_expression_choose_order_run_cards.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_intro } from "./app_code_lesson_expression_choose_order_and_before_or_intro.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the and-before-or lesson: what the two operators come to, then one such line taken all the way down with the && leftmost and then with the || leftmost, then the sentences saying what is new");
  ("Each line run through is one where the order changes the answer. Taken the way the lesson teaches it comes to true; taken left to right it comes to false. A run on a line where both readings agree would show the rule being followed and never show what following it is worth.");
  ("The parts are hung together by letting the operators decide, which is what this lesson is about - the && reaches for its two neighbours before the || does. The brackets lesson next door hands in a different way of hanging them and everything else on the screen is the same, so everything else is said once, next door.");
  ("BOTH ENDS ARE WALKED, because the card below asks about both. Only the && leftmost was worked until now, on the reasoning that there was nowhere else the && could go - which is not so: true || false && true carries no brackets, is a line this lesson prints, and has the || standing leftmost while the && still goes first. Measured 2026-08-28, forty lines from the bank came out && leftmost twenty-two times, so a learner met the other shape on nearly half of them having read a run that only ever showed the first.");
  ("The second walk is the first one turned round: the same three truths in the other order, with the && at the other end. Different truths would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The one in the middle is drawn, so the pair of lines is not the same picture on every visit, and it is drawn once for both so the turning round stays visible.");
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree_and_first =
    app_code_lesson_expression_choose_order_sides_settled_tree(
      app_code_expression_node_left_operator_first,
      false,
      middle_truth,
    );
  let tree_or_first =
    app_code_lesson_expression_choose_order_sides_settled_tree(
      app_code_expression_node_right_operator_first,
      true,
      middle_truth,
    );
  let step_sides = app_code_lesson_expression_choose_order_truths_step_sides();
  let heading_none = [];
  let heading_either =
    app_code_lesson_expression_choose_order_and_before_or_either_side();
  app_code_lesson_expression_choose_order_and_before_or_recall(root);
  app_code_lesson_expression_choose_order_run_cards(
    root,
    heading_none,
    tree_and_first,
    step_sides,
  );
  app_code_lesson_expression_choose_order_run_cards(
    root,
    heading_either,
    tree_or_first,
    step_sides,
  );
  app_code_lesson_expression_choose_order_change_card(
    root,
    app_code_lesson_expression_choose_order_and_before_or_intro,
  );
}
