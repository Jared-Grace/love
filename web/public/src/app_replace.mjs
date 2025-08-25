import { html_p_text } from "./html_p_text.mjs";
import { app_refresh } from "./app_refresh.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  marker("1");
  let app_fn = app_replace;
  let screens = app_replace_screens();
  const root = html_document_body();
  app_refresh({
    app_fn,
    screens,
    root: root,
  });
  let p = html_p_text(root, "test");
}
