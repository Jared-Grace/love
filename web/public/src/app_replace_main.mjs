import { html_style_set } from "./html_style_set.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_meta_viewport } from "./html_meta_viewport.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
  let p = html_p_text(root, "f");
  let html = html_document_root();
  html_style_set(b, style_key, style_value);
}
