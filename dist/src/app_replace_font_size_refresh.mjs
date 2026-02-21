import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_font_size } from "../../../love/public/src/app_replace_font_size.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
export function app_replace_font_size_refresh(context) {
  let root = property_get(context, "root");
  let value = app_replace_font_size(context);
  html_style_font_size(root, value + "px");
}
