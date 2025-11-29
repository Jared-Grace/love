import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_click_none(ci) {
  html_style_assign(ci, {
    pointerEvents: "none",
  });
}
