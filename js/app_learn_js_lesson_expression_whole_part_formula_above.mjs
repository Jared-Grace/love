import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_divisor } from "./app_learn_js_lesson_expression_divisor.mjs";
import { app_learn_js_lesson_expression_quotient } from "./app_learn_js_lesson_expression_quotient.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { app_learn_js_arrow } from "./app_learn_js_arrow.mjs";
export function app_learn_js_lesson_expression_whole_part_formula_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  let setup = app_learn_js_container_light_blue(root);
  app_learn_js_div_cycle_code(setup, ["Suppose we are dividing two numbers:"]);
  app_learn_js_div_cycle_code(setup, ["", "14 / 4"]);
  app_learn_js_remember_from_lesson(
    setup,
    context,
    app_learn_js_lesson_expression_divisor,
    ["", "4", " is the divisor"],
  );
  app_learn_js_remember_from_lesson(
    setup,
    context,
    app_learn_js_lesson_expression_quotient,
    ["", "Math.floor(14 / 4)", " is the quotient"],
  );
  let derivation = app_learn_js_container_light_blue(root);
  let define = html_div(derivation);
  html_span_text(define, "The ");
  html_span_text_code_dark(define, "quotient * divisor");
  html_span_text(define, " is called the ");
  let term = html_span_text(define, "whole part");
  html_bold(term);
  app_learn_js_div_cycle_code(derivation, ["", "quotient * divisor"]);
  let step_divisor = app_code_row_flex_center(derivation);
  app_learn_js_arrow(step_divisor);
  html_span_text_code_dark(step_divisor, "Math.floor(14 / 4) * divisor");
  let step_four = app_code_row_flex_center(derivation);
  app_learn_js_arrow(step_four);
  html_span_text_code_dark(step_four, "Math.floor(14 / 4) * 4");
  let conclusion = app_learn_js_container_light_blue(root);
  let concl = app_code_row_flex_center(conclusion);
  html_span_text(concl, "So,");
  html_span_text_code_dark(concl, "14 / 4");
  app_learn_js_arrow(concl);
  html_span_text_code_dark(concl, "Math.floor(14 / 4) * 4");
}
