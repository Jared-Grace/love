import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_contact_button_align(button) {
  "the shared contact button is appended at the page root, OUTSIDE the app's padded content container, so a plain full-width button would run to the viewport edge - wider than the in-container buttons (Home, Next) it sits under. Match them: inset it the same horizontal gap on each side. width = 100% minus both gaps, plus one gap of margin each side, so the total is exactly 100% (no horizontal scrollbar) and its edges line up with the container buttons";
  let gap = app_shared_spaced_gap();
  let width = text_combine_multiple(["calc(100% - 2 * ", gap, ")"]);
  html_style_set(button, "width", width);
  html_style_margin_x(button, gap);
}
