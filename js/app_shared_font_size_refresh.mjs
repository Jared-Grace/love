import { property_get } from "../../love/js/property_get.mjs";
import { app_shared_font_size } from "../../love/js/app_shared_font_size.mjs";
import { html_style_font_size } from "../../love/js/html_style_font_size.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export function app_shared_font_size_refresh(context) {
  let value = app_shared_font_size(context);
  app_shared_font_size_refresh_generic(context, value);
}
