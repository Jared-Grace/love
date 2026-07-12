import { app_replace_font_size_refresh } from "./app_replace_font_size_refresh.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_shared_initialize(context, app_fn, screens) {
  object_merge(context, {
    app_fn,
    screens,
  });
  html_mobile_default(context);
  app_replace_font_size_refresh(context);
}
