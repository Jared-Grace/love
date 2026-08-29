import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_sides_settled_tree } from "./app_code_lesson_expression_choose_order_sides_settled_tree.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_either_side } from "./app_code_lesson_expression_choose_order_and_before_or_either_side.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
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
  ("THE STEPS SAY THE RULE NOW, not that only one part has a true or a false on each side. That older sentence is not something a reader of this lesson can see: on false && true || true both the && and the || have a true or a false on each side, and the reason the && goes first is that it outranks the ||. It is also the one thing the lesson is for, so a walk that withheld it was showing the answer twice and the rule not at all.");
  ("The rule sentence comes from the same writer the three-operator lesson's walk uses, so a learner arriving at that lesson meets the wording already read here rather than a new one. That writer reads the reason off the operators left on the line, which is why this lesson may use it and the two bracket lessons after it may not: brackets move a part to the front for a reason no list of operators holds.");
  ("ONLY THE LINES ARE THIS LESSON'S OWN. The recall card, the two walks and the closing card were written out here and again in each of the two bracket lessons, three copies differing in nothing but which lines were handed to them, so the laying out is asked for now and what is left here is the pair of lines and the heading over the second one.");
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
  let heading_none = [];
  let heading_either =
    app_code_lesson_expression_choose_order_and_before_or_either_side();
  let walks = [
    {
      heading: heading_none,
      tree: tree_and_first,
    },
    {
      heading: heading_either,
      tree: tree_or_first,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_and_before_or_recall,
    walks,
    app_code_lesson_expression_choose_order_and_before_or_intro,
  );
}
