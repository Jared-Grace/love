import { html_mobile_default_font_size } from "../../../love/public/src/html_mobile_default_font_size.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
export function html_mobile_default(context) {
  let root = property_get(context, "root");
  html_mobile_default_font_size(root);
  html_meta_viewport();
  html_font_sans_serif_set_html();
  return root;
}
