import { app_code_code_output } from "./app_code_code_output.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
export function app_code_braces_paired_with_order_colors(parent, code, colors) {
  arguments_assert(arguments, 3);
  ("a program with every pair of braces in a colour of its own out of colors, and under it only its braces in the order they stand, each pair wearing the same colour in both; the colours are handed in so the writing around the two can name a brace in the colour it wears");
  ("Drawn as the same labelled card as the worked examples, asked for by the human 2026-10-10, so a learner who has read the card in the opening reads every example after it without going back to the labels.");
  function code_paint(component, text) {
    app_code_code_dark_lines_braces_paired_colors(component, text, colors);
  }
  function braces_paint(container, text) {
    let div = html_div(container);
    app_code_code_dark_lines_braces_paired_colors(div, text, colors);
  }
  let braces = app_code_braces_sequence(code);
  app_code_code_output({
    parent,
    code_label: "Code:",
    code,
    on_code: code_paint,
    output_label: "Its braces:",
    output: braces,
    on_output: braces_paint,
  });
}
