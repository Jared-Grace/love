import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_background_color_set(component, background) {
  html_style_assign(component, {
    "background-color": background,
  });
}
