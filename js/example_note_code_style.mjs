import { html_style_set } from "./html_style_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
// The light inline note-code look — monospace with a subtle grey background,
// lighter than the prominent function/command chips. Shared by the plain literal
// chip and the clickable fn-name chip so they stay identical.
export function example_note_code_style(code) {
  html_style_set(code, "font-family", "ui-monospace, monospace");
  html_style_background_color_set(code, "#e8e8e8");
  html_style_set(code, "border-radius", app_shared_border_radius());
  html_style_set(code, "padding", "0.05rem 0.3rem");
  html_style_set(code, "font-size", "0.9em");
}
