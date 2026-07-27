import { app_code_between_two_wholes } from "./app_code_between_two_wholes.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_generic(params) {
  ("the shared body of the two whole-number rounding lessons - Math.floor (round down) and Math.ceil (round up). They practise the same thing on a decimal by itself: the four questions (each a fresh whole part 2..7, alternating a decimal to round with an already-whole number that does not change), the labels, the worked example between two wholes shown for an ordinary AND an extreme decimal (to show it rounds its fixed way, not to the nearest), and the already-whole case. Nearly everything follows from the one direction, rounds_up: the words (up/down, bigger/smaller, above/below), which of the two wholes is chosen, and the decoy (the other whole). Each lesson passes ",
    fn_name.name,
    ", its two digit ranges, and whether it is the one that first introduces the term whole number.");
  let fn_name = property_get(params, "fn_name");
  let rounds_up = property_get(params, "rounds_up");
  let ordinary_digits = property_get(params, "ordinary_digits");
  let extreme_digits = property_get(params, "extreme_digits");
  let introduce_whole_number = property_get(params, "introduce_whole_number");
  let direction = "down";
  let superlative = "smaller";
  let preposition = "below";
  if (rounds_up) {
    direction = "up";
    superlative = "bigger";
    preposition = "above";
  }
  function code(inner) {
    "the rounding call on inner as a code string";
    let combined = text_combine_multiple([fn_name, "(", inner, ")"]);
    return combined;
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
    let r = code(inner);
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
  let name_id = title_name_id();
  let heading_lower = text_combine("round ", direction);
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
  function title_name_id() {
    "the home title: Round {direction} {fn}";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let heading = text_combine_multiple(["Round ", direction, " "]);
        html_span_text(parent, heading);
        html_span_text_code_dark(parent, fn_name);
      }
      return render;
    }
    let rights = [heading_lower];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the worked examples are randomized each visit: a decimal and its whole part for the definitions, an EXTREME decimal (leaning the other way under round-to-nearest) to show it still rounds its fixed way, and a separate already-whole number that does not change";
    let whole = integer_random(2, 7);
    let whole_text = text_to(whole);
    let ordinary_low = list_get(ordinary_digits, 0);
    let ordinary_high = list_get(ordinary_digits, 1);
    let digit = integer_random(ordinary_low, ordinary_high);
    let t3 = text_to(digit);
    let decimal = text_combine_multiple([whole_text, ".", t3]);
    let extreme_low = list_get(extreme_digits, 0);
    let extreme_high = list_get(extreme_digits, 1);
    let extreme_digit = integer_random(extreme_low, extreme_high);
    let t4 = text_to(extreme_digit);
    let extreme_decimal = text_combine_multiple([whole_text, ".", t4]);
    let input = add(whole, 1);
    let whole_up = text_to(input);
    let input2 = integer_random(2, 7);
    let whole_stays = text_to(input2);
    let chosen_whole = whole_text;
    let other_whole = whole_up;
    if (rounds_up) {
      chosen_whole = whole_up;
      other_whole = whole_text;
    }
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, ["", decimal, " is a decimal number"]);
    let no_decimal = html_div(define);
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " has no decimal, so ");
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " is a ");
    let term = html_span_text(no_decimal, "whole number");
    if (introduce_whole_number) {
      html_bold(term);
    }
    html_div_cycle_code(define, [
      "",
      decimal,
      " has a decimal, so ",
      decimal,
      " is not a whole number",
    ]);
    let rounds = app_code_container_light_blue(root);
    app_code_between_two_wholes(rounds, extreme_decimal, whole_text, whole_up);
    let chooses_suffix = text_combine_multiple([", the ", superlative, " one"]);
    html_div_cycle_code(rounds, [
      "So ",
      fn_name,
      " chooses ",
      chosen_whole,
      chooses_suffix,
    ]);
    let v = code(decimal);
    html_div_cycle_code(rounds, ["", v, " is ", chosen_whole]);
    let v2 = code(extreme_decimal);
    html_div_cycle_code(rounds, [
      "",
      v2,
      " is also ",
      chosen_whole,
      " not ",
      other_whole,
    ]);
    let gives_suffix = text_combine_multiple([
      " gives the whole number ",
      preposition,
      " it",
    ]);
    html_div_cycle_code(rounds, [
      "If a number has a decimal, ",
      fn_name,
      gives_suffix,
    ]);
    let whole_para = app_code_container_light_blue(root);
    html_div_cycle_code(whole_para, [
      "",
      fn_name,
      " does not change a number that is already whole",
    ]);
    let v3 = code(whole_stays);
    html_div_cycle_code(whole_para, ["For example, ", v3, " is ", whole_stays]);
  }
}
