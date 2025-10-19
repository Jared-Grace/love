import { html_checkboxes } from "../../../love/public/src/html_checkboxes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_sandbox_main() {
  let root = html_document_body();
  marker("1");
  let context = {
    root,
  };
  html_checkboxes(
    context,
    button_back,
    top_text,
    value_previous_get,
    checkbox_name,
    choices,
    on_next,
    button_next,
  );
}
