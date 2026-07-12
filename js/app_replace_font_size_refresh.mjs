import { property_get } from "./property_get.mjs";
import { app_replace_font_size } from "./app_replace_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_font_size_refresh(context) {
  let root = property_get(context, "root");
  let value = app_replace_font_size(context);
  html_style_font_size(root, text_combine(value, "px"));
}
