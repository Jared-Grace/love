import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { app_a_screens } from "../../../love/public/src/app_a_screens.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_a_main() {
  let app_fn = app_a;
  const root = html_document_body();
  let screens = app_a_screens();
  const context = {
    app_fn,
    screens,
    root,
  };
  function lambda() {}
  html_on_keydown(root, lambda);
  app_generic_refresh(context);
}
