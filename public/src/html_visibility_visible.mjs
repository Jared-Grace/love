import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_visibility_visible(component) {
  html_style_assign(component, {
    visibility: "visible",
  });
}
