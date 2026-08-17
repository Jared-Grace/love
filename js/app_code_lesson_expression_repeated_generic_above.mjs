import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_expression_repeated_generic_expanded_counted } from "./app_code_lesson_expression_repeated_generic_expanded_counted.mjs";
import { app_code_lesson_expression_repeated_generic_chip } from "./app_code_lesson_expression_repeated_generic_chip.mjs";
import { app_code_lesson_expression_repeated_generic_short_form } from "./app_code_lesson_expression_repeated_generic_short_form.mjs";
export function app_code_lesson_expression_repeated_generic_above(
  root,
  symbol,
  verb,
  expand_symbol,
) {
  arguments_assert(arguments, 4);
  let c = app_code_container_light_blue(root);
  let short_separator = text_combine_multiple([" ", symbol, " "]);
  ("two worked examples, each a left number and a count - four colored numbers in all - given four distinct familiar colours (red, green, blue, amber) so every number is easy to tell apart and no number wears a colour here and another colour there");
  let left_one = app_code_lesson_chip_color(0);
  let count_one = app_code_lesson_chip_color(1);
  let left_two = app_code_lesson_chip_color(2);
  let count_two = app_code_lesson_chip_color(3);
  let already = text_combine_multiple([
    "You already know how to ",
    verb,
    " numbers like ",
  ]);
  let three_numbers = text_combine_multiple([
    "2 ",
    expand_symbol,
    " 3 ",
    expand_symbol,
    " 4",
  ]);
  html_div_cycle_code(c, [already, three_numbers]);
  let what_if = text_combine_multiple([
    "What if the numbers you ",
    verb,
    " together are all the same number?",
  ]);
  html_div_cycle_code(c, [what_if]);
  let like = html_div(c);
  html_span_text(like, "Like ");
  app_code_lesson_expression_repeated_generic_expanded_counted(
    like,
    2,
    left_one,
    count_one,
    3,
    expand_symbol,
  );
  let map = html_div(c);
  html_span_text(map, "The ");
  app_code_lesson_expression_repeated_generic_chip(map, 2, left_one);
  html_span_text(map, " appears ");
  app_code_lesson_expression_repeated_generic_chip(map, 3, count_one);
  html_span_text(map, " times, so we can write ");
  app_code_lesson_expression_repeated_generic_short_form(
    map,
    2,
    3,
    left_one,
    count_one,
    short_separator,
  );
  html_span_text(map, " for short");
  let likewise = html_div(c);
  html_span_text(likewise, "Likewise ");
  app_code_lesson_expression_repeated_generic_expanded_counted(
    likewise,
    3,
    left_two,
    count_two,
    4,
    expand_symbol,
  );
  html_span_text(likewise, " is ");
  app_code_lesson_expression_repeated_generic_short_form(
    likewise,
    3,
    4,
    left_two,
    count_two,
    short_separator,
  );
  let how_many = text_combine_multiple([
    "The second number is how many to ",
    verb,
    " together",
  ]);
  html_div_cycle_code(c, [how_many]);
}
