import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function html_style_padding_em(p, value_em) {
  html_style_padding(p, text_combine(value_em, "em"));
}
