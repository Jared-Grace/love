import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_expression_round_generic_code } from "./app_code_lesson_expression_round_generic_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_round_generic_above_gives_suffix(
  r2,
  called_name,
  preposition,
) {
  arguments_assert(arguments, 3);
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
  let r = {
    whole_stays,
    rounds,
    gives_suffix,
  };
  return r;
}
