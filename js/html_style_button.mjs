import { html_style_head } from "./html_style_head.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_style_button(style) {
  html_style_head(text_combine_multiple(["button { ", style, " }"]));
}
