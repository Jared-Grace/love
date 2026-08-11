import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_arithmetic_less_than_worked_example(
  other,
  other_on_left,
  a_left,
  a_symbol,
  a_right,
  a_value,
  less_than_fn,
  root,
  less_than_symbol,
) {
  arguments_assert(arguments, 9);
  ("one worked example: the arithmetic sub-expression done first to its value, then the comparison to true or false; other_on_left puts the plain number on the left of the < (arithmetic on the right) or the reverse");
  let t = text_to(a_left);
  let t4 = text_to(a_right);
  let sub = text_combine_multiple([t, " ", a_symbol, " ", t4]);
  let on_true = text_to(other);
  let full_left = ternary(other_on_left, on_true, sub);
  let on_false = text_to(other);
  let full_right = ternary(other_on_left, sub, on_false);
  let on_true3 = text_to(other);
  let on_false3 = text_to(a_value);
  let combined_left = ternary(other_on_left, on_true3, on_false3);
  let on_true4 = text_to(a_value);
  let on_false4 = text_to(other);
  let combined_right = ternary(other_on_left, on_true4, on_false4);
  let final_left = ternary(other_on_left, other, a_value);
  let final_right = ternary(other_on_left, a_value, other);
  let final = less_than_fn(final_left, final_right);
  let box = app_code_container_light_blue(root);
  let t5 = text_to(a_value);
  let full_expression = text_combine_multiple([
    full_left,
    " ",
    less_than_symbol,
    " ",
    full_right,
  ]);
  html_div_cycle_code(box, [
    "For ",
    full_expression,
    ", we do ",
    sub,
    " first, which is ",
    t5,
  ]);
  let t6 = text_to(final);
  let combined_expression = text_combine_multiple([
    combined_left,
    " ",
    less_than_symbol,
    " ",
    combined_right,
  ]);
  html_div_cycle_code(box, [
    "Now we have ",
    combined_expression,
    ", which is ",
    t6,
  ]);
}
