import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_round_generic_above_v } from "./app_code_lesson_expression_round_generic_above_v.mjs";
import { app_code_lesson_expression_round_generic_above_gives_suffix } from "./app_code_lesson_expression_round_generic_above_gives_suffix.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_generic_above_trap_render(
  r,
  superlative,
  called_name,
  preposition,
  trap_render,
) {
  arguments_assert(arguments, 5);
  let r2 = app_code_lesson_expression_round_generic_above_v(
    r,
    superlative,
    called_name,
  );
  let r3 = app_code_lesson_expression_round_generic_above_gives_suffix(
    r2,
    called_name,
    preposition,
  );
  let gives_suffix = property_get(r3, "gives_suffix");
  let rounds = property_get(r3, "rounds");
  let whole_stays = property_get(r3, "whole_stays");
  html_div_cycle_code(rounds, [
    "If a number has a decimal, ",
    called_name,
    gives_suffix,
  ]);
  trap_render(rounds);
  return whole_stays;
}
