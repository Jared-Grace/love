import { html_font_set } from "../../../love/public/src/html_font_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_font_sans_serif_value } from "../../../love/public/src/html_font_sans_serif_value.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function html_font_sans_serif(context) {
  marker("1");
  let html = html_document_root();
  let value_initial = html_font_sans_serif_value();
  let value = storage_local_initialize_context(
    context,
    "font_family",
    value_initial,
  );
  html_font_set(html, value);
}
