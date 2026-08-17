import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_lesson_expression_round_generic_above_term } from "./app_code_lesson_expression_round_generic_above_term.mjs";
import { property_get } from "./property_get.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_round_generic_above_rounds(
  ordinary_digits,
  extreme_digits,
  rounds_up,
  root,
  metaphor_render,
  introduce_whole_number,
) {
  arguments_assert(arguments, 6);
  let whole = integer_random(2, 7);
  let whole_text = text_to(whole);
  let ordinary_low = list_get(ordinary_digits, 0);
  let ordinary_high = list_get(ordinary_digits, 1);
  let r = app_code_lesson_expression_round_generic_above_term(
    ordinary_low,
    ordinary_high,
    whole_text,
    extreme_digits,
    whole,
    rounds_up,
    root,
    metaphor_render,
  );
  let term = property_get(r, "term");
  let define = property_get(r, "define");
  let other_whole = property_get(r, "other_whole");
  let chosen_whole = property_get(r, "chosen_whole");
  let whole_stays = property_get(r, "whole_stays");
  let whole_up = property_get(r, "whole_up");
  let extreme_decimal = property_get(r, "extreme_decimal");
  let decimal = property_get(r, "decimal");
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
  let r2 = {
    whole_text,
    other_whole,
    chosen_whole,
    whole_stays,
    whole_up,
    extreme_decimal,
    decimal,
    rounds,
  };
  return r2;
}
