import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_whole_part_random } from "./app_code_expression_whole_part_random.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_whole_part_recall } from "./app_code_lesson_expression_choose_order_whole_part_recall.mjs";
import { app_code_lesson_expression_choose_order_whole_part_intro } from "./app_code_lesson_expression_choose_order_whole_part_intro.mjs";
export function app_code_lesson_expression_choose_order_whole_part_above(
  root,
  context_unused,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on this lesson: the formula put back in front of the learner, then a line of this lesson's own kind walked all the way down to its value with the reason for each step, then the sentence saying what is new");
  ("The same recall, run, hinge shape as every step-at-a-time lesson around it, laid out by the one that lays them all out, so a learner arriving here reads the screen they have been reading and only the line on it is new.");
  ("One line is walked, and no heading above it. A second walk is for a lesson whose lines come in two kinds and has to say how the second differs from the first; every line here is the one kind.");
  ("The line is drawn rather than written out, so the worked example is not the same picture on every visit, and it is drawn by the very place the questions are drawn from - a worked line the bank could not have handed out would be teaching off a line the lesson never asks about.");
  let tree = app_code_expression_whole_part_random();
  let heading_none = [];
  let walks = [
    {
      heading: heading_none,
      tree,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_whole_part_recall,
    walks,
    app_code_lesson_expression_choose_order_whole_part_intro,
  );
}
