import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_swapping_generic_pairs_wanted } from "./app_code_lesson_swapping_generic_pairs_wanted.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_swapping_generic_pair_code } from "./app_code_lesson_swapping_generic_pair_code.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { math_min } from "./math_min.mjs";
import { list_interleave_pair } from "./list_interleave_pair.mjs";
import { list_take } from "./list_take.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
export function app_code_lesson_swapping_generic(config) {
  "the shared shape for every swapping lesson: a op b === b op a for two DIFFERENT numbers. config = { name_id, above, true_ops, false_ops, wrap }. An op from true_ops survives the swap so the code is true (the value is unchanged); an op from false_ops flips so it is false (the two sides land on different values). wrap parenthesises each side - (a op b) === (b op a) - which is needed only when op is === or !==, because a === b === b === a would otherwise chain left to right into nonsense. distinct numbers are used because swapping two EQUAL numbers is a no-op that is vacuously true for any operator, so it could not tell the operators apart.";
  let name_id = property_get(config, "name_id");
  let above = property_get(config, "above");
  let true_ops = property_get(config, "true_ops");
  let false_ops = property_get(config, "false_ops");
  let wrap = property_get(config, "wrap");
  function expressions_all(ops, want_true) {
    "one line for each of this outcome's operators, in an order drawn fresh each screen so the same operator does not always come first";
    let shuffled = list_copy(ops);
    list_shuffle(shuffled);
    function to_code(op) {
      "this operator's line";
      let code = expression(op, want_true);
      return code;
    }
    let codes = list_map(shuffled, to_code);
    return codes;
  }
  function expression(op, want_true) {
    "a op b === b op a, the same two different numbers swapped around the operator, picked from the pairs that really land on want_true";
    let pairs = app_code_lesson_swapping_generic_pairs_wanted(
      op,
      want_true,
      wrap,
      eval,
    );
    let pair = list_random_item(pairs);
    let a = pair[0];
    let b = pair[1];
    let code = app_code_lesson_swapping_generic_pair_code(op, a, b, wrap);
    return code;
  }
  let true_count = list_size(true_ops);
  let false_count = list_size(false_ops);
  let taught_count = add(true_count, false_count);
  let example_count = math_min(taught_count, 4);
  function refill() {
    "one screenful of lines, every one of them a different operator: a true one and a false one taken in turn, so the first two lines already show that both answers happen, and drawn fresh each time so a lesson teaching more operators than fit shows a different handful on every press of the see-more button";
    "The screen used to hold four lines whatever the lesson taught, and it filled them without ever counting what the lesson teaches. Swapping + and * teaches three operators, so the fourth line could only be one of the three said again - a learner was shown 6 - 3 === 3 - 6 and 7 - 2 === 2 - 7 and asked to tell them apart. The comparison swapping lessons teach six, and four slots held four of them, so which two went missing was decided by nothing. Now the operators set the count and four caps it: a lesson teaching fewer than four shows every one it has, and a lesson teaching more shows four different ones and keeps the rest one press away. A screen is exactly one refill, which is what stops an operator appearing twice on it - a screen made of the end of one draw and the start of the next could show the same operator either side of the join.";
    let trues = expressions_all(true_ops, true);
    let falses = expressions_all(false_ops, false);
    let list = list_interleave_pair(trues, falses);
    let screen = list_take(list, example_count);
    return screen;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
