import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function app_shared_initialize(context, app_fn, screens) {
  object_merge(context, {
    app_fn,
    screens,
  });
  html_mobile_default(context);
  app_replace_font_size_refresh(context);
  await app_shared_refresh(context);
}
