import { html_margin } from "../../../love/public/src/html_margin.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function html_margin_em(component, margin) {
  let margin_em = text_combine(margin, "em");
  html_margin(component, margin_em);
}
