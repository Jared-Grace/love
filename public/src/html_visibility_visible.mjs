import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_visibility_visible(on_success) {
  html_style_assign(on_success, {
    visibility: "visible",
  });
}
