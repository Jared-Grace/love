import { html_style_padding } from "./html_style_padding.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_style_padding_em(p, value_em) {
  html_style_padding(p, text_combine(value_em, "em"));
}
