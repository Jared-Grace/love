import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_replace_screens } from "../../../love/public/src/app_replace_screens.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
export async function app_replace_main() {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  html_meta_viewport();
  const root = html_document_body();
  const context = {
    app_fn,
    screens,
    root: root,
  };
  app_generic_refresh(context);
  app_replace_font_size_refresh(context);
}
