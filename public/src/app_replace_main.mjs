import { app_replace_font_size_refresh } from "./app_replace_font_size_refresh.mjs";
import { html_meta_viewport } from "./html_meta_viewport.mjs";
import { app_refresh } from "./app_refresh.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { app_replace } from "./app_replace.mjs";
export function app_replace_main() {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  html_meta_viewport();
  const root = html_document_body();
  app_refresh({
    app_fn,
    screens,
    root: root,
  });
  app_replace_font_size_refresh(context);
}
