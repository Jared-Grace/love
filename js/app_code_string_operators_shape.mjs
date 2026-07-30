import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_operators_shape(
  parent,
  operator_a,
  operator_b,
) {
  "the shape shown in a string-comparison lesson's title: a quoted grey placeholder string, then the two operators the lesson teaches, EACH token in its OWN code tile. Separate tiles on purpose - the three tokens listed with a comma between the operators are not one valid expression, so putting them in a single code tile would present invalid code as if it were real; each tile on its own is valid.";
  let placeholder_color = app_code_placeholder_color();
  let quote = '"';
  let string_tile = html_span(parent);
  html_style_code_dark_nowrap(string_tile);
  html_span_text(string_tile, quote);
  let dots = html_span_text(string_tile, "...");
  html_font_color_set(dots, placeholder_color);
  html_span_text(string_tile, quote);
  html_span_text(parent, ": ");
  html_span_text_code_dark(parent, operator_a);
  html_span_text(parent, ", ");
  html_span_text_code_dark(parent, operator_b);
  return string_tile;
}
