import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_swapping_generic_pairs_wanted } from "./app_code_lesson_swapping_generic_pairs_wanted.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_swapping_generic_pair_code } from "./app_code_lesson_swapping_generic_pair_code.mjs";
import { list_interleave_pair } from "./list_interleave_pair.mjs";
import { list_size } from "./list_size.mjs";
import { math_min } from "./math_min.mjs";
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
  function marked_all(ops, want_true) {
    "this outcome's operators, shuffled, each one carrying the answer its line will have";
    let shuffled = list_copy(ops);
    list_shuffle(shuffled);
    function to_marked(op) {
      "this operator and the answer wanted from it";
      let m = {
        op,
        want_true,
      };
      return m;
    }
    let marks = list_map(shuffled, to_marked);
    return marks;
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
  ("The order is settled once, here, and then walked round and round for the whole lesson. A true operator and a false one are taken in turn, so any run of lines drawn from it holds both answers. Shuffled, so the lesson does not always open on the same operator.");
  let trues = marked_all(true_ops, true);
  let falses = marked_all(false_ops, false);
  let cycle = list_interleave_pair(trues, falses);
  let taught_count = list_size(cycle);
  let example_count = math_min(taught_count, 4);
  function refill() {
    "the whole cycle again, one line for every operator the lesson teaches, with fresh numbers";
    "The screen shows four of these at a time and the cycle keeps its place between screens, so a lesson teaching six goes 1234, then 5612, then 3456 - every operator comes round once a cycle, and none can be missing for long. Drawing four fresh out of six each screen would have been simpler and is what this did first, but then which two were left out was luck and an operator could sit out several screens running.";
    "No screen can show the same operator twice, because two lines for one operator are a whole cycle apart, and a screen is never wider than a cycle. That is why the count is capped at the cycle length as well as at four.";
    "The screen used to hold four lines whatever the lesson taught, and it filled them without ever counting what the lesson teaches. Swapping + and * teaches three operators, so the fourth line could only be one of the three said again - a learner was shown 6 - 3 === 3 - 6 and 7 - 2 === 2 - 7 and asked to tell them apart. The comparison swapping lessons teach six, and four slots held four of them, so which two went missing was decided by nothing.";
    function to_code(m) {
      "this operator's line for this time round";
      let op = property_get(m, "op");
      let want_true = property_get(m, "want_true");
      let code = expression(op, want_true);
      return code;
    }
    let codes = list_map(cycle, to_code);
    return codes;
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
