import { html_code_style_text } from "./html_code_style_text.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
export function html_code_style_attribute(style) {
  "one style, held as plain data, rendered as an html style attribute. that lets a single style source be both assigned to live dom and written into a static html string, so the two cannot drift apart";
  let body = html_code_style_text(style);
  let r = text_combine_3(' style="', body, '"');
  return r;
}
