import { app_replace_font_size } from "../../../love/public/src/app_replace_font_size.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
export async function app_replace_font_size_refresh(context) {
  let html = html_document_root();
  let value = app_replace_font_size(context);
  html_style_font_size(html, value + "px");
}
