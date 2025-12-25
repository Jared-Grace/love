import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_dev(fn) {
  const root = html_document_body();
  let context = {
    root,
  };
  fn(context);
}
