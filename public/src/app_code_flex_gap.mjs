import { app_code_flex_gap_value } from "../../../love/public/src/app_code_flex_gap_value.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_code_flex_gap(container) {
  html_style_assign(container, {
    gap: app_code_flex_gap_value(),
  });
}
