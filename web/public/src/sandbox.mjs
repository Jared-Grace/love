import { app_component } from "../../../love/public/src/app_component.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_sandbox_main } from "../../../love/public/src/app_sandbox_main.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  await app_component(a_name);
  app_sandbox_main({
    root: html_document_body(),
  });
}
