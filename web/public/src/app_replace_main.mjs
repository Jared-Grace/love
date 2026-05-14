import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
import { app_replace_screens } from "../../../love/public/src/app_replace_screens.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
export async function app_replace_main(context) {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  object_merge(context, {
    app_fn,
    screens,
  });
  html_meta_viewport();
  html_font_sans_serif_set_html();
  await app_shared_refresh(context);
  app_replace_font_size_refresh(context);
}
