import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_expression } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_expression.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_parentheses_either_side_words } from "./app_code_parentheses_either_side_words.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_recall } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_recall.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_intro } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_intro.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on this lesson: the two rules being brought together, then a line of this lesson's own kind walked all the way down with the marks at one end and then at the other, then the sentence saying what is new");
  ("The same recall, run, hinge shape as every step-at-a-time lesson around it, laid out by the one that lays them all out, so a learner arriving here reads the screen they have been reading and only the lines on it are new.");
  ("Both ends are walked, one after the other, rather than one of them being drawn. That is what the lesson after this one does with the same lines - it says the marks may stand at either end and then works a line with them at the other end, in the same card - and a sentence saying they may move would stand on half the visits with nothing beside it that moves.");
  ("The first walk puts the marks at the right end, where the bank's first question puts them, so the run a learner reads is the shape of the question they are about to be asked.");
  ("The lines are drawn rather than written out, so the pair is not the same picture on every visit, and each is drawn by the maker the questions are drawn by - a worked line the bank could not have printed would be teaching off a line the lesson never asks about.");
  let group_right_first = false;
  let group_left_second = true;
  let tree_right =
    app_code_lesson_expression_choose_order_arithmetic_parentheses_expression(
      group_right_first,
    );
  let tree_left =
    app_code_lesson_expression_choose_order_arithmetic_parentheses_expression(
      group_left_second,
    );
  let times = js_operator_asterisk_symbol();
  let heading_none = [];
  let heading_either = app_code_parentheses_either_side_words(times);
  let walks = [
    {
      heading: heading_none,
      tree: tree_right,
    },
    {
      heading: heading_either,
      tree: tree_left,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_arithmetic_parentheses_recall,
    walks,
    app_code_lesson_expression_choose_order_arithmetic_parentheses_intro,
  );
}
