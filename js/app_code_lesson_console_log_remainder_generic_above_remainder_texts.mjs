import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_console_log_remainder_generic_example } from "./app_code_lesson_console_log_remainder_generic_example.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_console_log_remainder_generic_above_remainder_texts(
  divisor,
  intro,
  root,
  divisor_text,
  percent,
) {
  arguments_assert(arguments, 5);
  let review = greater_than(divisor, 2);
  let opener = "When";
  if (review) {
    opener = "Remember: when";
  }
  let first_line = text_combine(
    opener,
    " we divide two numbers, sometimes the numbers divide evenly",
  );
  html_div_cycle_code(intro, [first_line]);
  html_div_cycle_code(intro, ["Other times the numbers do not divide evenly"]);
  let example_box = app_code_container_light_blue(root);
  app_code_lesson_console_log_remainder_generic_example(
    example_box,
    divisor,
    divisor_text,
  );
  let evenly_box = app_code_container_light_blue(root);
  let evenly = html_div(evenly_box);
  html_span_text(
    evenly,
    "When two numbers divide evenly, nothing is left over, so the remainder is ",
  );
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    evenly,
    0,
    divisor,
  );
  html_div_cycle_code(evenly_box, ["", percent, " gives the remainder"]);
  let meaning = app_code_container_light_blue(root);
  html_div_cycle_code(meaning, [
    "When we divide by ",
    divisor_text,
    ", the remainder is always smaller than ",
    divisor_text,
  ]);
  let legend = html_div(meaning);
  html_span_text(legend, "So if we divide by ");
  html_span_text_code_dark(legend, divisor_text);
  html_span_text(legend, ", the remainder is one of these: ");
  let remainder_texts = range_map(divisor, text_to);
  let r = {
    legend,
    remainder_texts,
  };
  return r;
}
