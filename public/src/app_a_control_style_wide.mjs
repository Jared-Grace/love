import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_a_control_style_wide(component) {
  app_a_control_style(component);
  html_style_assign(component, {
    width: "100%",
  });
}
