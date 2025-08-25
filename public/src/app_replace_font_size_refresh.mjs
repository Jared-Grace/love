import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_document_root } from "./html_document_root.mjs";
export function app_replace_font_size_refresh(context) {
  let html = html_document_root();
  let value = storage_local_initialize_context(context, "font_size", 20);
  html_style_font_size(html, value + "px");
}
