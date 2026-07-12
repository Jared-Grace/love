import { app_context_initialize_root } from "./app_context_initialize_root.mjs";
import { html_document_body } from "./html_document_body.mjs";
export async function app_context_initialize(fn) {
  let root = html_document_body();
  await app_context_initialize_root(root, fn);
}
