import { app_code_flex_gap_value } from "./app_code_flex_gap_value.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_flex_gap(container) {
  html_style_set(container, "gap", app_code_flex_gap_value());
}
