import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_min_max_generic_two_numbers } from "./app_code_lesson_expression_min_max_generic_two_numbers.mjs";
import { list_get } from "./list_get.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_expression_min_max_generic_code } from "./app_code_lesson_expression_min_max_generic_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_code_lesson_expression_min_max_generic_above(
  root,
  define_render,
  choose,
  decoy_choose,
  comparison,
  called_name,
  noun,
  short_name,
) {
  arguments_assert(arguments, 8);
  ("the lesson-specific opening line (define_render), then the worked example in BOTH orders - the chosen number on the left and on the right - then the equal-numbers case");
  define_render(root);
  let two = app_code_lesson_expression_min_max_generic_two_numbers();
  let a = list_get(two, 0);
  let b = list_get(two, 1);
  let chosen = choose(a, b);
  let other = decoy_choose(a, b);
  let chosen_text = text_to(chosen);
  let other_text = text_to(other);
  let example_box = app_code_container_light_blue(root);
  let compare_middle = text_combine_multiple([" is ", comparison, " "]);
  html_div_cycle_code(example_box, [
    "",
    chosen_text,
    compare_middle,
    other_text,
  ]);
  let v = app_code_lesson_expression_min_max_generic_code(
    chosen,
    other,
    called_name,
  );
  html_div_cycle_code(example_box, ["So ", v, " is ", chosen_text]);
  let v2 = app_code_lesson_expression_min_max_generic_code(
    other,
    chosen,
    called_name,
  );
  html_div_cycle_code(example_box, ["And ", v2, " is also ", chosen_text]);
  let chooses = text_combine_multiple([" chooses the ", noun, " number (the "]);
  let chooses_line = html_div(example_box);
  html_span_text_code_dark(chooses_line, called_name);
  html_span_text(chooses_line, chooses);
  let short_term = html_span_text(chooses_line, short_name);
  html_bold(short_term);
  html_span_text(chooses_line, "imum)");
  let equal_box = app_code_container_light_blue(root);
  html_div_cycle_code(equal_box, [
    "If both numbers are equal, then there's only one number to choose from, so ",
    called_name,
    " chooses that number",
  ]);
}
