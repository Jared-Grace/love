import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_between_two_wholes } from "./app_code_between_two_wholes.mjs";
import { app_code_lesson_expression_round_generic_code } from "./app_code_lesson_expression_round_generic_code.mjs";
export function app_code_lesson_expression_round_generic_above(
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
) {
  arguments_assert(arguments, 10);
  ("the worked examples are randomized each visit: a decimal and its whole part for the definitions, an EXTREME decimal (leaning the other way under round-to-nearest) to show it still rounds its fixed way, and a separate already-whole number that does not change");
  let whole = integer_random(2, 7);
  let whole_text = text_to(whole);
  let ordinary_low = list_get(ordinary_digits, 0);
  let ordinary_high = list_get(ordinary_digits, 1);
  let digit = integer_random(ordinary_low, ordinary_high);
  let t = text_to(digit);
  let decimal = text_combine_multiple([whole_text, ".", t]);
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
  let metaphor = app_code_container_light_blue(root);
  metaphor_render(metaphor);
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
    called_name,
    " chooses ",
    chosen_whole,
    chooses_suffix,
  ]);
  let v = app_code_lesson_expression_round_generic_code(decimal, called_name);
  html_div_cycle_code(rounds, ["", v, " is ", chosen_whole]);
  let v2 = app_code_lesson_expression_round_generic_code(
    extreme_decimal,
    called_name,
  );
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
    called_name,
    gives_suffix,
  ]);
  trap_render(rounds);
  let whole_para = app_code_container_light_blue(root);
  html_div_cycle_code(whole_para, [
    "",
    called_name,
    " does not change a number that is already whole",
  ]);
  let v3 = app_code_lesson_expression_round_generic_code(
    whole_stays,
    called_name,
  );
  html_div_cycle_code(whole_para, ["For example, ", v3, " is ", whole_stays]);
}
