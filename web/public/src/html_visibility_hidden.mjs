import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_visibility_hidden(component) {
  html_style_assign(component, {
    visibility: "hidden",
  });
}
