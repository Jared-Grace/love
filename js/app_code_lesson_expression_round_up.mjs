import { app_code_between_two_wholes } from "./app_code_between_two_wholes.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
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
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_up() {
  "practice Math.ceil on a decimal number by itself, the sibling of Math.floor: Math.ceil rounds a number UP to the whole number above it (Math.ceil(3.2) is 4, and Math.ceil(3.1) is also 4 - always up, never down), and it leaves an already-whole number unchanged (Math.ceil(3) is 3); the answer is that whole number; whole part 2..7, one decimal digit 1..9 so there is always a real decimal to round up";
  function ceil_code(inner) {
    "Math.ceil(inner) as a code string";
    let combined = text_combine_multiple(["Math.ceil(", inner, ")"]);
    return combined;
  }
  function make(whole, index) {
    "alternate down the batch, the DECIMAL first because rounding is the main use of Math.ceil: even positions are a decimal to round up (Math.ceil(6.2) is 7), odd positions are an already-whole number (Math.ceil(6) is 6, nothing to round) - so the batch leads with the main rounding case and still drills the no-change edge case";
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
    let r = ceil_code(inner);
    return r;
  }
  function refill() {
    "four questions, each with a DIFFERENT whole part so two never look alike, alternating an already-whole number with a decimal to round up";
    let wholes = list_shuffle_take([2, 3, 4, 5, 6, 7], 4);
    let list = list_map_index(wholes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.ceil mistake is rounding DOWN (or to the nearest) instead of up, so the tailored wrong answer is the whole number just below - answer - 1";
    let below = subtract(answer, 1);
    let r2 = [below];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Round up: ",
    forwards_answer_label: "rounded value: ",
    backwards_question_label: "rounded value: ",
    backwards_answer_label: "What code rounds up to the rounded value? ",
    unscramble_label: "Build the code that rounds up to the rounded value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log round up";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Round up ");
        html_span_text_code_dark(parent, "Math.ceil");
      }
      return render;
    }
    let rights = ["round up"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the worked examples are randomized each visit (a different example may be the one that clicks): a decimal and its whole part for the definitions and the ceil, a LOW decimal (1..3) to show it rounds UP not to the nearest, and a separate already-whole number that does not change";
    let whole = integer_random(2, 7);
    let whole_text = text_to(whole);
    let digit = integer_random(5, 9);
    let t3 = text_to(digit);
    let decimal = text_combine_multiple([whole_text, ".", t3]);
    let low_digit = integer_random(1, 3);
    let t4 = text_to(low_digit);
    let low_decimal = text_combine_multiple([whole_text, ".", t4]);
    let input = add(whole, 1);
    let whole_up = text_to(input);
    let input2 = integer_random(2, 7);
    let whole_stays = text_to(input2);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, ["", decimal, " is a decimal number"]);
    let no_decimal = html_div(define);
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " has no decimal, so ");
    html_span_text_code_dark(no_decimal, whole_text);
    html_span_text(no_decimal, " is a ");
    ("whole number is defined at Round down, so it is not re-bolded here");
    html_span_text(no_decimal, "whole number");
    html_div_cycle_code(define, [
      "",
      decimal,
      " has a decimal, so ",
      decimal,
      " is not a whole number",
    ]);
    let rounds = app_code_container_light_blue(root);
    app_code_between_two_wholes(rounds, low_decimal, whole_text, whole_up);
    html_div_cycle_code(rounds, [
      "so ",
      "Math.ceil",
      " chooses ",
      whole_up,
      ", the bigger one",
    ]);
    let v = ceil_code(decimal);
    html_div_cycle_code(rounds, ["", v, " is ", whole_up]);
    let v2 = ceil_code(low_decimal);
    html_div_cycle_code(rounds, [
      "",
      v2,
      " is also ",
      whole_up,
      " not ",
      whole_text,
    ]);
    html_div_cycle_code(rounds, [
      "",
      "Math.ceil",
      " gives the whole number above it",
    ]);
    let whole_para = app_code_container_light_blue(root);
    html_div_cycle_code(whole_para, [
      "",
      "Math.ceil",
      " does not change a number that is already whole",
    ]);
    let v3 = ceil_code(whole_stays);
    html_div_cycle_code(whole_para, ["For example, ", v3, " is ", whole_stays]);
  }
}
