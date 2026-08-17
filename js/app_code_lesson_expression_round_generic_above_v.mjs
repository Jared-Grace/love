import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_between_two_wholes } from "./app_code_between_two_wholes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_expression_round_generic_code } from "./app_code_lesson_expression_round_generic_code.mjs";
export function app_code_lesson_expression_round_generic_above_v(
  r,
  superlative,
  called_name,
) {
  arguments_assert(arguments, 3);
  let rounds = property_get(r, "rounds");
  let decimal = property_get(r, "decimal");
  let extreme_decimal = property_get(r, "extreme_decimal");
  let whole_up = property_get(r, "whole_up");
  let whole_stays = property_get(r, "whole_stays");
  let chosen_whole = property_get(r, "chosen_whole");
  let other_whole = property_get(r, "other_whole");
  let whole_text = property_get(r, "whole_text");
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
  let r2 = {
    rounds,
    extreme_decimal,
    whole_stays,
    chosen_whole,
    other_whole,
    v,
  };
  return r2;
}
