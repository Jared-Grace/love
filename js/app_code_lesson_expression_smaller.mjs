import { app_code_lesson_expression_min_max_generic } from "./app_code_lesson_expression_min_max_generic.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_smaller() {
  "practice Math.min, the first function that takes TWO numbers instead of one: Math.min(a, b) gives the smaller of the two, written with the numbers separated by a comma (Math.min(3, 8) is 3); the answer is the smaller number. Being the first two-number function, its intro introduces the two-number idea in general.";
  function define_render(root) {
    "the FIRST two-number function, so the opening line introduces the idea in general - some functions take two numbers, separated by a comma - with two emphasised";
    let define = app_code_container_light_blue(root);
    let define_line = html_div(define);
    html_span_text(define_line, "Some functions take ");
    let term = html_span_text(define_line, "two");
    html_bold(term);
    html_span_text(define_line, " numbers, separated by a comma ");
    html_span_text_code_dark(define_line, ",");
  }
  let lesson = app_code_lesson_expression_min_max_generic({
    fn_name: "Math.min",
    choose: math_min,
    decoy_choose: math_max,
    noun: "smaller",
    noun_upper: "Smaller",
    comparison: "smaller than",
    define_render,
  });
  return lesson;
}
