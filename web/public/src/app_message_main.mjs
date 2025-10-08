import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_message_main() {
  marker("1");
  const root = html_document_body();
  let component = html_element(root, "textarea");
  app_karate_style_control(component);
}
