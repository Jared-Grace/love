import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_down() {
  "practice Math.floor on a decimal number by itself, before it is used on a division: Math.floor rounds a number DOWN to the whole number below it (Math.floor(3.5) is 3, and Math.floor(3.9) is also 3 - always down, never up); the answer is that whole number; whole part 2..7, one decimal digit 1..9 so there is always a real decimal to round off";
  function floor_code(inner) {
    "Math.floor(inner) as a code string";
    return text_combine_multiple(["Math.floor(", inner, ")"]);
  }
  function make(whole, index) {
    "alternate down the batch, the DECIMAL first because rounding is the main use of Math.floor: even positions are a decimal to round down (Math.floor(6.5) is 6), odd positions are an already-whole number (Math.floor(6) is 6, nothing to round) - so the batch leads with the main rounding case and still drills the no-change edge case";
    let decimal_question = integer_even_is(index);
    let inner;
    if (decimal_question) {
      let digit = integer_random(1, 9);
      inner = text_combine_multiple([text_to(whole), ".", text_to(digit)]);
    } else {
      inner = text_to(whole);
    }
    return floor_code(inner);
  }
  function refill() {
    "four questions, each with a DIFFERENT whole part so two never look alike, alternating an already-whole number with a decimal to round down";
    let wholes = list_shuffle_take([2, 3, 4, 5, 6, 7], 4);
    let list = list_map_index(wholes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.floor mistake is rounding UP (or to the nearest) instead of down, so the tailored wrong answer is the whole number just above - answer + 1";
    return [add(answer, 1)];
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log round down";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Round down");
      }
      return render;
    }
    let rights = ["round down"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, ["", "3.5", " is a decimal number"]);
    html_div_cycle_code(define, [
      "",
      "3",
      " has no decimal, so ",
      "3",
      " is a whole number",
    ]);
    html_div_cycle_code(define, [
      "",
      "3.5",
      " has a decimal, so ",
      "3.5",
      " is not a whole number",
    ]);
    let rounds = app_code_container_light_blue(root);
    html_div_cycle_code(rounds, [
      "",
      "Math.floor",
      " takes a number and rounds it down to the whole number below it",
    ]);
    html_div_cycle_code(rounds, ["", "Math.floor(3.5)", " is ", "3"]);
    html_div_cycle_code(rounds, [
      "",
      "Math.floor",
      " always rounds down, never up",
    ]);
    html_div_cycle_code(rounds, [
      "",
      "Math.floor(3.9)",
      " is also ",
      "3",
      " not ",
      "4",
    ]);
    let whole = app_code_container_light_blue(root);
    html_div_cycle_code(whole, ["A number that is already whole does not change"]);
    html_div_cycle_code(whole, ["For example, ", "Math.floor(6)", " is ", "6"]);
  }
}
