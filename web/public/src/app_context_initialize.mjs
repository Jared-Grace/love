import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_context_initialize(fn) {
  marker("1");
  const root = html_document_body();
  app_context_initialize_root(root, fn);
}
