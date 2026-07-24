import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_column_style(component) {
  "cap a content block (a light-blue box, a padded row) to the same centered column as the buttons, so on a wide window the content and the buttons are about the same width instead of the content running full-bleed while the buttons sit narrow. A touch wider than the 40rem button cap so a button nested inside a content box (e.g. the multiple-choice answers inside the light-blue question box) still fits. Viewport-based (100vw) like the button cap, so blocks in differently-padded parents still line up; the auto side margins center it";
  let gap = app_shared_spaced_gap();
  let width = text_combine_multiple([
    "min(42rem, calc(100vw - 2 * ",
    gap,
    "))",
  ]);
  html_style_set(component, "width", width);
  html_style_margin_x(component, "auto");
}
