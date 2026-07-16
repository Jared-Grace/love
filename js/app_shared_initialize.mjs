import { app_shared_font_size_refresh } from "../../love/js/app_shared_font_size_refresh.mjs";
import { html_mobile_default } from "../../love/js/html_mobile_default.mjs";
import { object_merge } from "../../love/js/object_merge.mjs";
export function app_shared_initialize(context, app_fn, screens) {
  object_merge(context, {
    app_fn,
    screens,
  });
  html_mobile_default(context);
  app_shared_font_size_refresh(context);
}
