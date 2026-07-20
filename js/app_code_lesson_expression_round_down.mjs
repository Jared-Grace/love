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
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
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
    "the worked examples are randomized each visit (a different example may be the one that clicks): a decimal and its whole part for the definitions and the floor, a HIGH decimal (7..9) to show it rounds DOWN not to the nearest, and a separate already-whole number that does not change";
    let whole = integer_random(2, 7);
    let whole_text = text_to(whole);
    let digit = integer_random(1, 9);
    let decimal = text_combine_multiple([whole_text, ".", text_to(digit)]);
    let high_digit = integer_random(7, 9);
    let high_decimal = text_combine_multiple([whole_text, ".", text_to(high_digit)]);
    let whole_up = text_to(add(whole, 1));
    let whole_stays = text_to(integer_random(2, 7));
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, ["", decimal, " is a decimal number"]);
    let no_decimal = html_div(define);
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " has no decimal, so ");
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " is a ");
    let term = html_span_text(no_decimal, "whole number");
    html_style_set(term, "font-weight", "bold");
    html_div_cycle_code(define, [
      "",
      decimal,
      " has a decimal, so ",
      decimal,
      " is not a whole number",
    ]);
    let rounds = app_code_container_light_blue(root);
    html_div_cycle_code(rounds, [
      "",
      "Math.floor",
      " takes a number and rounds it down to the whole number below it",
    ]);
    html_div_cycle_code(rounds, [
      "In other words (for these positive numbers) ",
      "Math.floor",
      " removes the decimal part, so that only the whole number is left",
    ]);
    html_div_cycle_code(rounds, ["", floor_code(decimal), " is ", whole_text]);
    html_div_cycle_code(rounds, [
      "",
      "Math.floor",
      " always rounds down, never up",
    ]);
    html_div_cycle_code(rounds, [
      "For example: ",
      floor_code(high_decimal),
      " is also ",
      whole_text,
      " not ",
      whole_up,
    ]);
    let whole_para = app_code_container_light_blue(root);
    html_div_cycle_code(whole_para, [
      "",
      "Math.floor",
      " does not change a number that is already whole",
    ]);
    html_div_cycle_code(whole_para, [
      "For example, ",
      floor_code(whole_stays),
      " is ",
      whole_stays,
    ]);
  }
}
