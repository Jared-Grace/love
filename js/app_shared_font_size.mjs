import { app_shared_font_size_default } from "./app_shared_font_size_default.mjs";
import { app_shared_font_size_generic } from "./app_shared_font_size_generic.mjs";
export function app_shared_font_size(context) {
  let value_default = app_shared_font_size_default();
  let value = app_shared_font_size_generic(context, value_default);
  return value;
}
