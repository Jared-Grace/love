import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_sides_settled_tree } from "./app_code_lesson_expression_choose_order_sides_settled_tree.mjs";
import { app_code_lesson_expression_choose_order_run_cards } from "./app_code_lesson_expression_choose_order_run_cards.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
import { app_code_lesson_expression_choose_order_truths_step_sides } from "./app_code_lesson_expression_choose_order_truths_step_sides.mjs";
import { app_code_lesson_expression_choose_order_brackets_either_side } from "./app_code_lesson_expression_choose_order_brackets_either_side.mjs";
import { app_code_lesson_expression_choose_order_brackets_recall } from "./app_code_lesson_expression_choose_order_brackets_recall.mjs";
import { app_code_lesson_expression_choose_order_brackets_intro } from "./app_code_lesson_expression_choose_order_brackets_intro.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_choose_order_brackets_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the brackets lesson: the two rules being brought together, then the same line walked down twice with the brackets at one end and then the other, then the sentences saying what is new");
  ("Each line run through is one the brackets change the answer of. Read the way the brackets ask it comes to false; read as though they were not there it comes to true. A run on a line where both readings agree would show the brackets being obeyed and never show what obeying them is worth.");
  ("The parts are hung together with brackets round the or, which is what this lesson is about and the only thing it differs by. The and-before-or lesson next door hands in the hanging the operators would have chosen on their own, and everything else on the screen is the same, so everything else is said once, next door.");
  ("Both sides are walked, one after the other, rather than one of them being drawn. That is what the two lessons which taught brackets already do - each says the marks may stand at either end and then works a line with them at the other end, in the same card - and a learner arriving here has read both of those screens. Drawn instead, the sentence saying they may move would stand on half the visits with nothing beside it that moves.");
  ("The second walk is the first one turned round: the same three truths, in the other order, with the brackets at the other end. Different truths would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The one in the middle is drawn, so the pair of lines is not the same picture on every visit, and it is drawn once for both so the turning round stays visible.");
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree_right = app_code_lesson_expression_choose_order_sides_settled_tree(
    app_code_expression_node_right_operator_first,
    false,
    middle_truth,
  );
  let tree_left = app_code_lesson_expression_choose_order_sides_settled_tree(
    app_code_expression_node_left_operator_first,
    true,
    middle_truth,
  );
  let step_sides = app_code_lesson_expression_choose_order_truths_step_sides();
  let heading_none = [];
  let heading_either =
    app_code_lesson_expression_choose_order_brackets_either_side();
  app_code_lesson_expression_choose_order_brackets_recall(root);
  app_code_lesson_expression_choose_order_run_cards(
    root,
    heading_none,
    tree_right,
    step_sides,
  );
  app_code_lesson_expression_choose_order_run_cards(
    root,
    heading_either,
    tree_left,
    step_sides,
  );
  app_code_lesson_expression_choose_order_change_card(
    root,
    app_code_lesson_expression_choose_order_brackets_intro,
  );
}
