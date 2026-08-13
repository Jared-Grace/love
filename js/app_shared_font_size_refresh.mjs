import { app_shared_font_size_refresh_generic } from "./app_shared_font_size_refresh_generic.mjs";
import { app_shared_font_size } from "./app_shared_font_size.mjs";
export function app_shared_font_size_refresh(context) {
  let value = app_shared_font_size(context);
  app_shared_font_size_refresh_generic(context, value);
}
