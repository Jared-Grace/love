import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_background_color(div, background) {
  html_style_assign(div, {
    "background-color": background,
  });
}
