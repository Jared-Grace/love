import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_run_cards } from "./app_code_lesson_expression_choose_order_run_cards.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
export function app_code_lesson_expression_choose_order_steps_above_generic(
  root,
  recall,
  tree,
  step_sides,
  intro,
) {
  arguments_assert(arguments, 5);
  ("what stands above the card on a lesson whose line is taken down one operator at a time: the thing to remember first, then the one line handed in walked all the way to its value, then the one sentence saying what is different here");
  ("The same three-part shape - recall, run, hinge - as every step-at-a-time lesson around it, because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on the screen is what the line is allowed to hold.");
  ("What a part needs on each side is handed in, because the shape cannot read it off the line: an arithmetic line wants a number there and a line of true and false wants one of those two. Everything else on the screen is the same telling, so naming the kind is what keeps one shape serving both rather than a second copy being written to change one sentence.");
  ("The walk itself and the last card are each their own thing, so a lesson needing two walked lines can lay out the three parts itself and still have every card come out the same as the cards here. Kept inside, a second walk could only be had by writing this shape out twice.");
  ("No heading is asked for above the line, because a lesson walking one line has nothing to say about that walk which is not already said in the last card.");
  recall(root);
  let heading_none = [];
  app_code_lesson_expression_choose_order_run_cards(
    root,
    heading_none,
    tree,
    step_sides,
  );
  app_code_lesson_expression_choose_order_change_card(root, intro);
}
