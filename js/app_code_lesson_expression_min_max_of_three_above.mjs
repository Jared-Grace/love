import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_min_max_of_three_three_numbers } from "./app_code_lesson_expression_min_max_of_three_three_numbers.mjs";
import { list_get } from "./list_get.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_expression_min_max_of_three_code } from "./app_code_lesson_expression_min_max_of_three_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_code_lesson_expression_min_max_of_three_above(root) {
  arguments_assert(arguments, 1);
  ("the duo: Math.min and Math.max each shown with the same three numbers, so both are established as taking more than two; randomized each visit");
  let three = app_code_lesson_expression_min_max_of_three_three_numbers();
  let a = list_get(three, 0);
  let b = list_get(three, 1);
  let c = list_get(three, 2);
  let ab_min = math_min(a, b);
  let smallest = math_min(ab_min, c);
  let ab_max = math_max(a, b);
  let largest = math_max(ab_max, c);
  let smallest_text = text_to(smallest);
  let largest_text = text_to(largest);
  let ta = text_to(a);
  let tb = text_to(b);
  let tc = text_to(c);
  let nums_text = text_combine_multiple([ta, ", ", tb, ", ", tc]);
  let v_min = app_code_lesson_expression_min_max_of_three_code(
    "Math.min",
    a,
    b,
    c,
  );
  let v_max = app_code_lesson_expression_min_max_of_three_code(
    "Math.max",
    a,
    b,
    c,
  );
  let define = app_code_container_light_blue(root);
  html_div_cycle_code(define, [
    "",
    "Math.min",
    " and ",
    "Math.max",
    " can receive more than two numbers",
  ]);
  let min_box = app_code_container_light_blue(root);
  let min_line = html_div(min_box);
  html_span_text_code_dark(min_line, smallest_text);
  html_span_text(min_line, " is the smallest (the ");
  let min_term = html_span_text(min_line, "min");
  html_bold(min_term);
  html_span_text(min_line, "imum) of ");
  html_span_text_code_dark(min_line, nums_text);
  html_div_cycle_code(min_box, ["So ", v_min, " is ", smallest_text]);
  let max_box = app_code_container_light_blue(root);
  let max_line = html_div(max_box);
  html_span_text_code_dark(max_line, largest_text);
  html_span_text(max_line, " is the largest (the ");
  let max_term = html_span_text(max_line, "max");
  html_bold(max_term);
  html_span_text(max_line, "imum) of ");
  html_span_text_code_dark(max_line, nums_text);
  html_div_cycle_code(max_box, ["So ", v_max, " is ", largest_text]);
}
