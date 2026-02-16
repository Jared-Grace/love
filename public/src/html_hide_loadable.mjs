import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_hide_loadable(i) {
  html_style_assign(i, {
    position: "absolute",
    left: "-9999px",
  });
  html_style_assign(i, {
    visibility: "hidden",
  });
}
