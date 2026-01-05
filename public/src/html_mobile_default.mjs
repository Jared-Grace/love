import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
export function html_mobile_default(context) {
  let root = object_property_get(context, "root");
  html_style_font_size(root, "20px");
  html_meta_viewport();
  html_font_sans_serif_set_html();
  return root;
}
