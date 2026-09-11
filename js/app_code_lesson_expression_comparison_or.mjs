import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_lesson_expression_choose_order_comparison_side } from "./app_code_lesson_expression_choose_order_comparison_side.mjs";
import { app_code_expression_parts_node } from "./app_code_expression_parts_node.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_lesson_expression_choose_order_or_expression } from "./app_code_lesson_expression_choose_order_or_expression.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_comparison_or_title_name_id } from "./app_code_lesson_expression_comparison_or_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_expression_comparison_or_intro } from "./app_code_lesson_expression_comparison_or_intro.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
export function app_code_lesson_expression_comparison_or() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: 3 < 5 || 2 < 4 asked for its value, with nothing to press");
  ("The twin of the lesson that puts a comparison either side of an &&, and the one the run was missing. Everywhere else here a line is taken apart a press at a time and then asked for whole; || had the pressing lesson and nothing to ask it whole afterwards.");
  ("Two kinds of line a screen, the same two the && twin shows: a comparison each side of the ||, and a comparison one side with a plain true or false the other. The mixed kind is the smaller step of the two - it changes one side of the || the learner already has - and it was missing here for a while, so a learner met it under && and never again under ||.");
  ("The comparisons-both-sides lines are drawn by the very same maker the pressing lesson draws its lines with, so a learner meets one family of lines twice rather than two families that merely look alike. Anything the maker is later taught to draw arrives in both lessons together, and neither can drift away from the other.");
  ("The mixed lines are made here instead, and deliberately are not given to the shared maker: a plain true has nothing to solve, so the pressing lesson would be offering a side with no step in it to press.");
  ("Each kind is shown once coming to true and once coming to false. That matters more here than under an &&, because a true || may hold a false side and a learner who has only ever seen agreeing sides has a habit that answers three lines in four.");
  ("The wrong answer offered is the opposite word, which is the only other thing a line like this can come to.");
  function mixed_tree(want_true) {
    "a comparison one side of the || and a plain true or false the other, the pair of them drawn to come out to want_true";
    "Which side the comparison lands on is drawn rather than fixed, because the card above says a comparison can be either side of an || and a bank that always put it on the left would be saying otherwise.";
    let symbol = js_operator_or_symbol();
    let truths = app_code_operator_truths_wanted(symbol, want_true);
    let comparison_left = boolean_random();
    let comparison_truth = ternary(comparison_left, truths[0], truths[1]);
    let plain = ternary(comparison_left, truths[1], truths[0]);
    let parts =
      app_code_lesson_expression_choose_order_comparison_side(comparison_truth);
    let side = app_code_expression_parts_node(parts);
    let left = ternary(comparison_left, side, plain);
    let right = ternary(comparison_left, plain, side);
    let tree = app_code_expression_node(left, symbol, right);
    return tree;
  }
  function refill() {
    "four lines a screen: both kinds, each shown coming to true and coming to false";
    let both_true = app_code_lesson_expression_choose_order_or_expression(true);
    let both_false =
      app_code_lesson_expression_choose_order_or_expression(false);
    let mixed_true = mixed_tree(true);
    let mixed_false = mixed_tree(false);
    let trees = [both_true, both_false, mixed_true, mixed_false];
    let list = list_map(trees, app_code_expression_code);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_comparison_or_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above: app_code_lesson_expression_comparison_or_intro,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
