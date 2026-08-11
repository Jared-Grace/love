import { app_code_lesson_expression_absolute_value_title_name_id } from "./app_code_lesson_expression_absolute_value_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_absolute_value() {
  "practice Math.abs, another value-in value-out function like the rounding ones: Math.abs gives how far a number is from zero, which is always positive - a negative number loses its minus sign (Math.abs(-5) is 5) and a positive number stays the same (Math.abs(5) is 5); the answer is that distance; magnitude 2..9";
  function abs_code(inner) {
    "Math.abs(inner) as a code string";
    let combined = text_combine_multiple(["Math.abs(", inner, ")"]);
    return combined;
  }
  function make(magnitude, index) {
    "alternate down the batch, the NEGATIVE first because turning a negative positive is the main use of Math.abs: even positions are a negative number (Math.abs(-6) is 6), odd positions are an already-positive number (Math.abs(6) is 6, no change) - so the batch leads with the main case and still drills the no-change edge case";
    let negative_question = integer_even_is(index);
    let t = text_to(magnitude);
    let inner = t;
    if (negative_question) {
      inner = text_combine_multiple(["-", t]);
    }
    let r = abs_code(inner);
    return r;
  }
  function refill() {
    "four questions, each with a DIFFERENT magnitude so two never look alike, alternating a negative number with an already-positive one";
    let magnitudes = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9], 4);
    let list = list_map_index(magnitudes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.abs mistake is keeping the minus sign instead of dropping it, so the tailored wrong answer is the NEGATIVE of the answer - what you get if you forget to take the distance";
    let answer_negated = subtract(0, answer);
    let r2 = [answer_negated];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_absolute_value_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Absolute value: ",
    forwards_answer_label: "positive value: ",
    backwards_question_label: "positive value: ",
    backwards_answer_label: "What code gives this positive value? ",
    unscramble_label: "Build the code that gives this positive value: ",
  });
  return lesson;
  function above(root) {
    "examples FIRST (a negative made positive, a positive kept the same), then the three plain rules, with Math.abs in code style. Negatives were seen earlier (e.g. 2 - 5 is -3)";
    let magnitude = integer_random(2, 9);
    let magnitude_text = text_to(magnitude);
    let negative_text = text_combine_multiple(["-", magnitude_text]);
    let example_box = app_code_container_light_blue(root);
    let v = abs_code(negative_text);
    html_div_cycle_code(example_box, ["", v, " is ", magnitude_text]);
    let v2 = abs_code(magnitude_text);
    html_div_cycle_code(example_box, ["", v2, " is ", magnitude_text]);
    let rules = app_code_container_light_blue(root);
    html_div_cycle_code(rules, [
      "",
      "Math.abs",
      " will make a negative number positive",
    ]);
    html_div_cycle_code(rules, [
      "",
      "Math.abs",
      " will keep a positive number the same",
    ]);
    html_div_cycle_code(rules, [
      "The result of ",
      "Math.abs",
      " is always positive",
    ]);
  }
}
