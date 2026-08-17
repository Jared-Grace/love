import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
export function app_code_lesson_expression_remainder_divide_above(root) {
  arguments_assert(arguments, 1);
  let setup = app_code_container_light_blue(root);
  html_div_cycle_code(setup, ["For ", "14 / 4", " :"]);
  html_div_cycle_code(setup, ["", "14", " is the dividend"]);
  html_div_cycle_code(setup, ["", "4", " is the divisor"]);
  html_div_cycle_code(setup, [
    "",
    "Math.floor(14 / 4) === 3",
    ", so the quotient is ",
    "3",
  ]);
  let step = app_code_row_flex_center(setup);
  html_span_text_code_dark(step, "quotient * divisor");
  app_code_arrow(step);
  html_span_text_code_dark(step, "3 * 4 === 12");
  html_div_cycle_code(setup, ["So the whole part is ", "12"]);
  let properties = app_code_container_light_blue(root);
  html_div_cycle_code(properties, [
    "Notice that ",
    "4",
    " evenly divides into ",
    "12",
  ]);
  html_div_cycle_code(properties, [
    "The divisor (",
    "4",
    ") always evenly divides into the whole part (",
    "12",
    ")",
  ]);
  html_div_cycle_code(properties, [
    "However ",
    "4",
    " does not evenly divide into ",
    "14",
  ]);
  html_div_cycle_code(properties, [
    "The divisor (",
    "4",
    ") may or may not evenly divide into the dividend (",
    "14",
    ")",
  ]);
  html_div_cycle_code(properties, [
    "The whole part (",
    "12",
    ") cannot be larger than the dividend (",
    "14",
    ")",
  ]);
  html_div_cycle_code(properties, [
    "The whole part (",
    "12",
    ") is always the largest number, that can be evenly divided by the divisor, that is not larger than the dividend (",
    "14",
    ")",
  ]);
  let result = app_code_container_light_blue(root);
  html_div_cycle_code(result, [
    "Now we will subtract the whole part (",
    "12",
    ") from the dividend (",
    "14",
    ") to find what is left over:",
  ]);
  html_div_cycle_code(result, ["", "14 - 12 === 2"]);
  html_div_cycle_code(result, ["So ", "2", " is the remainder"]);
  html_div_cycle_code(result, ["This is the same as ", "14 % 4", " :"]);
  html_div_cycle_code(result, ["", "14 % 4 === 2"]);
  let summary = app_code_container_light_blue(root);
  html_div_cycle_code(summary, ["So for ", "14 % 4"]);
  html_div_cycle_code(summary, [
    "We use this formula: ",
    "14 - Math.floor(14 / 4) * 4",
  ]);
  html_div_cycle_code(summary, ["And here is the answer: ", "2"]);
  html_div_cycle_code(summary, ["So we know ", "14 % 4 === 2"]);
}
