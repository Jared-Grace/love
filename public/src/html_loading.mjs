import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function html_loading() {
  marker("1");
  let body = html_document_body();
  let div = html_div(root);
}
