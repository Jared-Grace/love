import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function app_code_padding_x(component) {
  let value = app_shared_content_edge_gap();
  html_style_padding_x(component, value);
}
