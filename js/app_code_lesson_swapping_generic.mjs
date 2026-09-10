import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { list_interleave_pair } from "./list_interleave_pair.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_swapping_generic_pairs_wanted } from "./app_code_lesson_swapping_generic_pairs_wanted.mjs";
import { app_code_lesson_swapping_generic_pair_code } from "./app_code_lesson_swapping_generic_pair_code.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
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
  function refill() {
    "one line a screen for every operator the lesson teaches, and no operator twice: a true one and a false one taken in turn, so the first two lines already show that both answers happen, and whichever kind is longer finishes the screen";
    "The screen used to hold four lines whatever the lesson taught, and four is the right number for none of them. Swapping + and * teaches three operators, so the fourth line could only be one of the three said again - a learner was shown 6 - 3 === 3 - 6 and 7 - 2 === 2 - 7 and asked to tell them apart. The comparison swapping lessons teach six, so two of the six were never on the screen at all. Counting the operators is the only number that is right for every one of these lessons, because the operators are what the lesson is a list of.";
    let trues = expressions_all(true_ops, true);
    let falses = expressions_all(false_ops, false);
    let list = list_interleave_pair(trues, falses);
    return list;
  }
  let true_count = list_size(true_ops);
  let false_count = list_size(false_ops);
  let example_count = add(true_count, false_count);
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
