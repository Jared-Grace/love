import { html_mobile_default_font_size } from "../../../love/public/src/html_mobile_default_font_size.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function html_mobile_default_font_size_context(context) {
  let root = property_get(context, "root");
  html_mobile_default_font_size(root);
  return root;
}
