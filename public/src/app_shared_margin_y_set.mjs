import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { app_karate_margin_y } from "../../../karate_code/public/src/app_karate_margin_y.mjs";
export function app_shared_margin_y_set(component) {
  const margin_y = app_karate_margin_y();
  html_style_margin_y(component, margin_y);
}
