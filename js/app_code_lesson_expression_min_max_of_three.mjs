import { app_code_lesson_expression_min_max_of_three_above } from "./app_code_lesson_expression_min_max_of_three_above.mjs";
import { app_code_lesson_expression_min_max_of_three_three_numbers } from "./app_code_lesson_expression_min_max_of_three_three_numbers.mjs";
import { app_code_lesson_expression_min_max_of_three_code } from "./app_code_lesson_expression_min_max_of_three_code.mjs";
import { app_code_lesson_expression_min_max_of_three_title_name_id } from "./app_code_lesson_expression_min_max_of_three_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { equal_not } from "./equal_not.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { range_map } from "./range_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
export function app_code_lesson_expression_min_max_of_three() {
  "Math.min and Math.max are not limited to two numbers - give either one three numbers and it still returns the smallest / largest (Math.min(3, 8, 5) is 3, Math.max(3, 8, 5) is 8). One combined lesson - a min example and a max example - because going from two numbers to three is a small step once Math.min and Math.max are known. Half the questions are Math.min and half Math.max; three different numbers 2..12, the other two stand as decoys.";
  function make(index) {
    "one question over three different numbers, alternating Math.min and Math.max down the batch so both are drilled";
    let three = app_code_lesson_expression_min_max_of_three_three_numbers();
    let a = list_get(three, 0);
    let b = list_get(three, 1);
    let c = list_get(three, 2);
    let use_max = integer_even_is(index);
    let f_name = "Math.min";
    if (use_max) {
      f_name = "Math.max";
    }
    let r = app_code_lesson_expression_min_max_of_three_code(f_name, a, b, c);
    return r;
  }
  function refill() {
    "four questions, a mix of Math.min and Math.max, each a different trio of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the two numbers that are NOT the answer - for a Math.min question they are the larger two, for a Math.max question the smaller two; either way, the other two numbers in the call";
    let nums = text_integers(question);
    function not_answer(n) {
      let tn = text_to(n);
      let diff = equal_not(tn, answer);
      return diff;
    }
    let others = list_filter(nums, not_answer);
    return others;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_min_max_of_three_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    unscramble_label: "Build the code that gives this value: ",
  });
  return lesson;
  function above(root) {
    let r2 = app_code_lesson_expression_min_max_of_three_above(root);
    return r2;
  }
}
