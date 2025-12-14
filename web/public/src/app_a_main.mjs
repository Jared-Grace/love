import { on_keydown_stop } from "../../../love/public/src/on_keydown_stop.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { invoke_multiple_arg } from "../../../love/public/src/invoke_multiple_arg.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { app_a_screens } from "../../../love/public/src/app_a_screens.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_a_main() {
  let app_fn = app_a;
  const root = html_document_body();
  let screens = app_a_screens();
  let on_keydowns = [];
  const context = {
    app_fn,
    screens,
    root,
    on_keydowns,
  };
  function lambda(e) {
    on_keydown_stop(e);
    invoke_multiple_arg(on_keydowns, e);
  }
  html_on_keydown(root, lambda);
  html_font_sans_serif_set_html();
  app_generic_refresh(context);
}
