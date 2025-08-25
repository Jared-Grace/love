import {app_refresh} from "./app_refresh.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {app_replace_screens} from "./app_replace_screens.mjs";
import {app_replace} from "./app_replace.mjs";
export function app_replace_main() {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  const root = html_document_body();
  app_refresh({
    app_fn,
    screens,
    root: root
  });
}
