import { html_visibility_hidden } from "../../../love/public/src/html_visibility_hidden.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_hide_loadable(i) {
  html_style_assign(i, {
    position: "absolute",
    left: "-9999px",
  });
  html_visibility_hidden(i);
}
