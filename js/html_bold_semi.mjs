import { html_style_set } from "./html_style_set.mjs";
export function html_bold_semi(b) {
  "semibold, font-weight 600: heavier than the mild 500 weight, lighter than full bold 700 — for headings and labels that want emphasis without going fully bold";
  html_style_set(b, "font-weight", "600");
}
