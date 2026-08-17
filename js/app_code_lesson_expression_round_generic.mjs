import { app_code_lesson_expression_round_generic_above } from "./app_code_lesson_expression_round_generic_above.mjs";
import { app_code_lesson_expression_round_generic_code } from "./app_code_lesson_expression_round_generic_code.mjs";
import { app_code_lesson_expression_round_generic_title_name_id } from "./app_code_lesson_expression_round_generic_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_round_generic(params) {
  "the shared body of the two whole-number rounding lessons - Math.floor (round down) and Math.ceil (round up). They practise the same thing on a decimal by itself: the four questions (each a fresh whole part 2..7, alternating a decimal to round with an already-whole number that does not change), the labels, the worked example between two wholes shown for an ordinary AND an extreme decimal (to show it rounds its fixed way, not to the nearest), and the already-whole case. Nearly everything follows from the one direction (up or down): the words (up/down, bigger/smaller, above/below), which of the two wholes is chosen, and the decoy (the other whole). Each lesson passes the function name, its two digit ranges, and whether it is the one that first introduces the term whole number.";
  let called_name = property_get(params, "fn_name");
  let rounds_up = property_get(params, "rounds_up");
  let ordinary_digits = property_get(params, "ordinary_digits");
  let extreme_digits = property_get(params, "extreme_digits");
  let introduce_whole_number = property_get(params, "introduce_whole_number");
  let metaphor_render = property_get(params, "metaphor_render");
  let trap_render = property_get(params, "trap_render");
  let direction = "down";
  let superlative = "smaller";
  let preposition = "below";
  if (rounds_up) {
    direction = "up";
    superlative = "bigger";
    preposition = "above";
  }
  function make(whole, index) {
    "alternate down the batch, the DECIMAL first because rounding is the main use: even positions are a decimal to round, odd positions are an already-whole number (nothing to round) - so the batch leads with the main rounding case and still drills the no-change edge case";
    let decimal_question = integer_even_is(index);
    let inner = null;
    if (decimal_question) {
      let digit = integer_random(1, 9);
      let t = text_to(whole);
      let t2 = text_to(digit);
      inner = text_combine_multiple([t, ".", t2]);
    } else {
      inner = text_to(whole);
    }
    let r = app_code_lesson_expression_round_generic_code(inner, called_name);
    return r;
  }
  function refill() {
    "four questions, each with a DIFFERENT whole part so two never look alike, alternating an already-whole number with a decimal to round";
    let wholes = list_shuffle_take([2, 3, 4, 5, 6, 7], 4);
    let list = list_map_index(wholes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic mistake is rounding the OTHER way (or to the nearest), so the tailored wrong answer is the whole number just the other side - the one it did not round to";
    let wrong = add(answer, 1);
    if (rounds_up) {
      wrong = subtract(answer, 1);
    }
    let r2 = [wrong];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_round_generic_title_name_id(
    direction,
    called_name,
  );
  let forwards_question_label = text_combine_multiple([
    "Round ",
    direction,
    ": ",
  ]);
  let backwards_answer_label = text_combine_multiple([
    "What code rounds ",
    direction,
    " to the rounded value? ",
  ]);
  let unscramble_label = text_combine_multiple([
    "Build the code that rounds ",
    direction,
    " to the rounded value: ",
  ]);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label,
    forwards_answer_label: "rounded value: ",
    backwards_question_label: "rounded value: ",
    backwards_answer_label,
    unscramble_label,
  });
  return lesson;
  function above(root) {
    let r3 = app_code_lesson_expression_round_generic_above(
      root,
      ordinary_digits,
      extreme_digits,
      rounds_up,
      metaphor_render,
      introduce_whole_number,
      superlative,
      called_name,
      preposition,
      trap_render,
    );
    return r3;
  }
}
