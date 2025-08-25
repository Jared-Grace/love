import {app_replace_font_size_refresh} from "./app_replace_font_size_refresh.mjs";
import {storage_local_set_context} from "./storage_local_set_context.mjs";
import {app_replace_font_size} from "./app_replace_font_size.mjs";
export function app_replace_font_size_adjust(context, factor) {
  let value = app_replace_font_size(context);
  value *= factor;
  storage_local_set_context(context, "font_size", value);
  app_replace_font_size_refresh(context);
}
