import { example_note_code_font_size } from "./example_note_code_font_size.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
("The light inline note-code look — monospace with a subtle grey background,");
("lighter than the prominent function/command chips. Shared by the plain literal");
("chip and the clickable fn-name chip so they stay identical.");
export function example_note_code_style(code) {
  html_font_set(code, "ui-monospace, monospace");
  html_style_background_color_set(code, "#e8e8e8");
  let border_radius = app_shared_border_radius();
  html_border_radius(code, border_radius);
  html_style_padding(code, "0.05rem 0.3rem");
  let value = example_note_code_font_size();
  html_style_font_size(code, value);
}
