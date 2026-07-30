import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_equality_shape(parent) {
  "the shape of a string equality check as ONE code tile: a quoted grey placeholder string followed by the two operators the lesson teaches, === and !==, so the title reads as one piece of code and names both operators at a glance";
  let placeholder_color = app_code_placeholder_color();
  let quote = '"';
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, quote);
  let dots = html_span_text(tile, "...");
  html_font_color_set(dots, placeholder_color);
  html_span_text(tile, quote);
  html_span_text(tile, " === , !==");
  return tile;
}
