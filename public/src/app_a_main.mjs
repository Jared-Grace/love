import { app_a_screens } from "../../../love/public/src/app_a_screens.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { app_karate } from "../../../karate_code/public/src/app_karate.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export async function app_a_main() {
  let app_fn = app_karate;
  const root = html_document_body();
  let screens = app_a_screens();
  const context = {
    app_fn,
    screens,
    root: root,
  };
  app_generic_refresh(context);
  await app_a_home();
}
