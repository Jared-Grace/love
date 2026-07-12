import { html_font_set } from "./html_font_set.mjs";
import { html_font_sans_serif_value } from "./html_font_sans_serif_value.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function html_font_sans_serif(context) {
  let html = html_document_root();
  let value_initial = html_font_sans_serif_value();
  let value = storage_local_initialize_context(
    context,
    "font_family",
    value_initial,
  );
  html_font_set(html, value);
}
