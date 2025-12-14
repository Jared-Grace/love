import { html_font_set } from "../../../love/public/src/html_font_set.mjs";
import { html_font_sans_serif_value } from "../../../love/public/src/html_font_sans_serif_value.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
export function html_font_sans_serif_set_html() {
  html_roboto_include();
  let html2 = html_document_root();
  let style_value = html_font_sans_serif_value();
  html_font_set(html2, style_value);
}
