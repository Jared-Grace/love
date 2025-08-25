import {html_style_font_size} from "./html_style_font_size.mjs";
import {html_document_root} from "./html_document_root.mjs";
export function app_replace_font_size_refresh() {
  let html = html_document_root();
  html_style_font_size(html, "20px");
}
