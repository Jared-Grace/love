import { html_display_set } from "./html_display_set.mjs";
import { app_code_arrow_turned } from "./app_code_arrow_turned.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_arrow_inline(parent, degrees) {
  "the code app's drawn arrow, turned degrees clockwise from rightwards, sitting inside a line of writing next to a word rather than on a row of its own - asked by the human 2026-10-01 for the directions up, down, left and right. inline-flex keeps it in the flow of the sentence, and vertical-align middle centres it on the letters";
  let arrow = app_code_arrow_turned(parent, degrees);
  html_display_set(arrow, "inline-flex");
  html_style_set(arrow, "vertical-align", "middle");
  return arrow;
}
