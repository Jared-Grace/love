import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_context_initialize(fn) {
  marker("1");
  const root = html_document_body();
  let context = {
    root,
  };
  fn(context);
}
