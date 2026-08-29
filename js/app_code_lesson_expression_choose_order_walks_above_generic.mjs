import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_choose_order_reason_run } from "./app_code_lesson_expression_choose_order_reason_run.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
export function app_code_lesson_expression_choose_order_walks_above_generic(
  root,
  recall,
  walks,
  intro,
) {
  arguments_assert(arguments, 4);
  ("what stands above the card on a lesson whose line is taken down one operator at a time: the thing to remember first, then each line handed in walked all the way to its value under whatever heading it was handed in with, then the one sentence saying what is different here");
  ("The same recall, run, hinge shape as every step-at-a-time lesson around it, because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on the screen is what the line is allowed to hold.");
  ("The walks arrive as a list rather than as one line, because three lessons here walk two lines and two walk a single line, and the difference between them is a count rather than a shape. Written as two shapes, the second walk's heading and the card under it had to be kept level by hand in every lesson that had one.");
  ("Each walk carries its own heading, because the heading is what says why a second line is being walked at all - that the marks may stand at the other end, or that the operators may meet the other way round. A first walk hands in no heading, and hands in an empty one rather than being told apart from the rest, so nothing here has to know which walk it is on.");
  recall(root);
  for (let walk of walks) {
    let heading = property_get(walk, "heading");
    let tree = property_get(walk, "tree");
    app_code_lesson_expression_choose_order_reason_run(root, heading, tree);
  }
  app_code_lesson_expression_choose_order_change_card(root, intro);
}
