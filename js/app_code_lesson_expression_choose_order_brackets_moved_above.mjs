import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_expression_node_left_operator_first_bracketed } from "./app_code_expression_node_left_operator_first_bracketed.mjs";
import { app_code_expression_node_right_operator_first_bracketed } from "./app_code_expression_node_right_operator_first_bracketed.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_other_pair } from "./app_code_lesson_expression_choose_order_brackets_moved_other_pair.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_recall } from "./app_code_lesson_expression_choose_order_brackets_recall.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_intro } from "./app_code_lesson_expression_choose_order_brackets_moved_intro.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the moving brackets lesson: the two rules being brought together, then one line walked down twice with the same three words and the brackets round the first pair and then the second, then the sentences saying what is new");
  ("The three truths are the same on both walks and only the marks move, which is the whole claim of the lesson. Different words on the second walk would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The first walk is the one whose brackets change nothing, so the learner watches the line answer the way the operators would have answered on their own, and then watches the same words come out the other way once the pair is moved. Shown the other way round, the moving pair would read as the ordinary case and the harmless one as the surprise.");
  ("The false and the true at the two ends are fixed rather than drawn, because they are what makes the two walks land differently. With a true at the left end or a false at the right the brackets would change nothing wherever they went, and the screen would show a pair of marks being moved for no reason a learner could see.");
  ("The one in the middle is drawn, so the pair of lines is not the same picture on every visit, and it is drawn once for both so the moving stays visible.");
  ("The two rules put back in front of the learner are the ones the lesson before it recalls, asked for from there rather than written again, because they are the same two rules and a near-copy is a thing to be compared where the same words are a thing already known.");
  ("THE WALK NAMES THE BRACKETS AS THE REASON, which is what makes the two walks say different things about the same three words. It used to say only that the bracketed part had a value on each side, which is true of both walks and so could not tell them apart at all: the whole difference the lesson is about was on the screen and never said out loud.");
  ("ONLY THE LINES ARE THIS LESSON'S OWN. The recall card, the two walks and the closing card were written out here and again in the two lessons before it, three copies differing in nothing but which lines were handed to them, so the laying out is asked for now and what is left here is the pair of lines and the heading over the second one.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree_left = app_code_expression_node_left_operator_first_bracketed(
    false,
    and_symbol,
    middle_truth,
    or_symbol,
    true,
  );
  let tree_right = app_code_expression_node_right_operator_first_bracketed(
    false,
    and_symbol,
    middle_truth,
    or_symbol,
    true,
  );
  let heading_none = [];
  let heading_other =
    app_code_lesson_expression_choose_order_brackets_moved_other_pair();
  let walks = [
    {
      heading: heading_none,
      tree: tree_left,
    },
    {
      heading: heading_other,
      tree: tree_right,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_brackets_recall,
    walks,
    app_code_lesson_expression_choose_order_brackets_moved_intro,
  );
}
