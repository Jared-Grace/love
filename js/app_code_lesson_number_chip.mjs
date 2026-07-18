import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_number_chip(parent, number, color) {
  "a single number as a colored code chip - white text on the given color - used to color-code a number by its role (a remainder, an exponent base or power) with one shared style";
  let chip = html_span_text_code_background(parent, text_to(number), color);
  return chip;
}
