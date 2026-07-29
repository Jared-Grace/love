import { html_mobile_default_font_size_context } from "./html_mobile_default_font_size_context.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_text_size_adjust_lock } from "./html_text_size_adjust_lock.mjs";
export function html_mobile_default(context) {
  let root = html_mobile_default_font_size_context(context);
  html_font_sans_serif_set_html();
  html_text_size_adjust_lock();
  return root;
}
