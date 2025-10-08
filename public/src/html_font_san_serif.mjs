import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function html_font_san_serif(context, html) {
  let value = storage_local_initialize_context(
    context,
    "font_family",
    "Arial, Helvetica, sans-serif",
  );
  html_style_set(html, "font-family", value);
}
