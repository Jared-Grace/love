import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_sandbox_main } from "../../../love/public/src/app_sandbox_main.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  app_sandbox_main({
    root: html_document_body(),
  });
}
