import { app_code_lesson_expression_round_generic_above_term } from "./app_code_lesson_expression_round_generic_above_term.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
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
  let {
    decimal,
    extreme_decimal,
    whole_up,
    whole_stays,
    chosen_whole,
    other_whole,
    define,
    term,
  } = app_code_lesson_expression_round_generic_above_term(
    ordinary_low,
    ordinary_high,
    whole_text,
    extreme_digits,
    whole,
    rounds_up,
    root,
    metaphor_render,
  );
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
