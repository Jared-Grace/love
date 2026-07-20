import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
export function html_body_div() {
  "Create a div as a direct child of the document body and return it — the recurring";
  "make-a-cover-on-the-body opening that six overlays hand-wrote.";
  arguments_assert(arguments, 0);
  let body = html_document_body();
  let cover = html_div(body);
  return cover;
}
