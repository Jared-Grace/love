import { text_decimal_combine } from "./text_decimal_combine.mjs";
import { app_code_lesson_expression_round_nearest_above } from "./app_code_lesson_expression_round_nearest_above.mjs";
import { app_code_lesson_expression_round_nearest_round_code } from "./app_code_lesson_expression_round_nearest_round_code.mjs";
import { app_code_lesson_expression_round_nearest_title_name_id } from "./app_code_lesson_expression_round_nearest_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
export function app_code_lesson_expression_round_nearest() {
  "practice Math.round, the third rounding sibling after Math.floor and Math.ceil: Math.round rounds a number to the NEAREST whole number - down when the first decimal digit is less than 5 (Math.round(3.2) is 3) and up when it is 5 or more (Math.round(3.8) is 4, Math.round(3.5) is 4); the answer is that nearest whole number; whole part 2..7, one decimal digit so there is always a real decimal to round";
  function make(whole, index) {
    "alternate down the batch: even positions are a decimal that rounds DOWN (a first digit 1..4, e.g. Math.round(6.2) is 6), odd positions are a decimal that rounds UP (a first digit 5..9, e.g. Math.round(6.7) is 7) - so both directions of nearest are drilled";
    let rounds_down = integer_even_is(index);
    let digit = null;
    if (rounds_down) {
      digit = integer_random(1, 4);
    } else {
      digit = integer_random(5, 9);
    }
    let inner = text_decimal_combine(whole, digit);
    let r = app_code_lesson_expression_round_nearest_round_code(inner);
    return r;
  }
  function refill() {
    "four questions, each with a DIFFERENT whole part so two never look alike, alternating a decimal that rounds down with one that rounds up";
    let wholes = list_shuffle_take([2, 3, 4, 5, 6, 7], 4);
    let list = list_map_index(wholes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.round mistake is rounding the WRONG way, so the two tailored wrong answers are the whole numbers on either side - one below and one above the correct nearest whole";
    let below = subtract(answer, 1);
    let above2 = add(answer, 1);
    let r2 = [below, above2];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_round_nearest_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Round to nearest: ",
    forwards_answer_label: "rounded value: ",
    backwards_question_label: "rounded value: ",
    backwards_answer_label: "What code rounds to the nearest rounded value? ",
    unscramble_label:
      "Build the code that rounds to the nearest rounded value: ",
  });
  return lesson;
  function above(root) {
    let r3 = app_code_lesson_expression_round_nearest_above(root);
    return r3;
  }
}
