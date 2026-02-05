import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export async function app_context_initialize(fn) {
  const root = html_document_body();
  await app_context_initialize_root(root, fn);
}
