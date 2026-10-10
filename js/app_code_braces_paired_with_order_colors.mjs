import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
export function app_code_braces_paired_with_order_colors(parent, code, colors) {
  arguments_assert(arguments, 3);
  ("a program with every pair of braces in a colour of its own out of colors, and under it only its braces in the order they stand, each pair wearing the same colour in both; the colours are handed in so the writing around the two can name a brace in the colour it wears");
  let div = html_div(parent);
  app_code_code_dark_lines_braces_paired_colors(div, code, colors);
  let braces = app_code_braces_sequence(code);
  let div2 = html_div(parent);
  app_code_code_dark_lines_braces_paired_colors(div2, braces, colors);
}
