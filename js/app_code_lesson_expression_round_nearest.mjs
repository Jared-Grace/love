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
import { html_bold } from "./html_bold.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_first_decimal_digit_line } from "./app_code_first_decimal_digit_line.mjs";
import { app_code_decimal_spaced } from "./app_code_decimal_spaced.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_nearest() {
  "practice Math.round, the third rounding sibling after Math.floor and Math.ceil: Math.round rounds a number to the NEAREST whole number - down when the first decimal digit is less than 5 (Math.round(3.2) is 3) and up when it is 5 or more (Math.round(3.8) is 4, Math.round(3.5) is 4); the answer is that nearest whole number; whole part 2..7, one decimal digit so there is always a real decimal to round";
  function round_code(inner) {
    "Math.round(inner) as a code string";
    let combined = text_combine_multiple(["Math.round(", inner, ")"]);
    return combined;
  }
  function make(whole, index) {
    "alternate down the batch: even positions are a decimal that rounds DOWN (a first digit 1..4, e.g. Math.round(6.2) is 6), odd positions are a decimal that rounds UP (a first digit 5..9, e.g. Math.round(6.7) is 7) - so both directions of nearest are drilled";
    let rounds_down = integer_even_is(index);
    let digit = null;
    if (rounds_down) {
      digit = integer_random(1, 4);
    } else {
      digit = integer_random(5, 9);
    }
    let t = text_to(whole);
    let t2 = text_to(digit);
    let inner = text_combine_multiple([t, ".", t2]);
    let r = round_code(inner);
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
  let name_id = title_name_id();
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
  function title_name_id() {
    "the home title is console.log round to nearest";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Round to nearest ");
        html_span_text_code_dark(parent, "Math.round");
      }
      return render;
    }
    let rights = ["round to nearest"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "example before rule: show a round-down and a round-up first, THEN name it nearest, THEN teach how it decides - the first digit after the decimal point, shown on a two-digit decimal so first is unambiguous. Randomized each visit";
    "the whole part avoids 3 and 4 so it never equals a highlighted first digit (3 or 4 below), which would make the number look like it repeats a digit";
    let whole = list_random_item([2, 5, 6, 7]);
    let whole_text = text_to(whole);
    ("the two highlighted first digits get two of the shared categorical chip colours (amber and blue) so digit colouring is chosen the same way as everywhere else, and the two digits read as clearly distinct");
    let color_low = app_code_lesson_chip_color(3);
    let color_high = app_code_lesson_chip_color(2);
    let low_digit = integer_random(1, 4);
    let t3 = text_to(low_digit);
    let low_decimal = text_combine_multiple([whole_text, ".", t3]);
    let high_digit = integer_random(5, 9);
    let t4 = text_to(high_digit);
    let high_decimal = text_combine_multiple([whole_text, ".", t4]);
    let input = add(whole, 1);
    let whole_up = text_to(input);
    ("examples first, then name it, then explain how it decides");
    let examples = app_code_container_light_blue(root);
    let v = round_code(low_decimal);
    html_div_cycle_code(examples, ["", v, " is ", whole_text]);
    let v2 = round_code(high_decimal);
    html_div_cycle_code(examples, ["", v2, " is ", whole_up]);
    let name_line = html_div(examples);
    html_span_text_code_dark(name_line, "Math.round");
    html_span_text(name_line, " gives the ");
    let term = html_span_text(name_line, "nearest");
    html_bold(term);
    html_span_text(name_line, " whole number");
    ("concrete first: two worked examples with DIFFERENT first digits in different colours, then the knife-edge pair rounding down then up, THEN the general rule, and the one-line takeaway LAST");
    let rule = app_code_container_light_blue(root);
    function rounds_line(fraction_text, middle_text, result_text) {
      "a spaced decimal, then the rounds-to prose, then the whole-number result as a code tile";
      let line = html_div(rule);
      app_code_decimal_spaced(line, whole_text, fraction_text, null);
      html_span_text(line, middle_text);
      html_span_text_code_dark(line, result_text);
    }
    app_code_first_decimal_digit_line(
      rule,
      "For example, in ",
      whole_text,
      "3",
      "5",
      color_low,
    );
    app_code_first_decimal_digit_line(
      rule,
      "in ",
      whole_text,
      "4",
      "999",
      color_high,
    );
    rounds_line("4999", ' rounds "down" to ', whole_text);
    rounds_line("5", ' rounds "up" to ', whole_up);
    html_div_cycle_code(rule, [
      "If the first digit after the decimal point is ",
      "0",
      ", ",
      "1",
      ", ",
      "2",
      ", ",
      "3",
      ", or ",
      "4",
      " then ",
      "Math.round",
      " is like ",
      "Math.floor",
    ]);
    html_div_cycle_code(rule, [
      "If the first digit after the decimal point is ",
      "5",
      ", ",
      "6",
      ", ",
      "7",
      ", ",
      "8",
      ", or ",
      "9",
      " then ",
      "Math.round",
      " is like ",
      "Math.ceil",
    ]);
    html_div_cycle_code(rule, [
      "The first digit after the decimal point decides which way it rounds",
    ]);
  }
}
