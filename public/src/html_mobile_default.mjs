import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
export function html_mobile_default(context) {
  let root = html_mobile_default_font_size_context(context);
  html_meta_viewport();
  html_font_sans_serif_set_html();
  return root;
}
