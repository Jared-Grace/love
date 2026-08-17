import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_round_generic_above_v } from "./app_code_lesson_expression_round_generic_above_v.mjs";
import { app_code_lesson_expression_round_generic_above_rounds } from "./app_code_lesson_expression_round_generic_above_rounds.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
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
  let r = app_code_lesson_expression_round_generic_above_rounds(
    ordinary_digits,
    extreme_digits,
    rounds_up,
    root,
    metaphor_render,
    introduce_whole_number,
  );
  let r2 = app_code_lesson_expression_round_generic_above_v(
    r,
    superlative,
    called_name,
  );
  let v = property_get(r2, "v");
  let other_whole = property_get(r2, "other_whole");
  let chosen_whole = property_get(r2, "chosen_whole");
  let whole_stays = property_get(r2, "whole_stays");
  let extreme_decimal = property_get(r2, "extreme_decimal");
  let rounds = property_get(r2, "rounds");
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
