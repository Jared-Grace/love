import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { app_karate_style_control_border } from "../../../love/public/src/app_karate_style_control_border.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_message_main() {
  marker("1");
  let app_fn = app_message_main;
  const root = html_document_body();
  const context = {
    app_fn,
    root: root,
  };
  app_replace_font_size_refresh(context);
  let component = html_element(root, "textarea");
  app_karate_style_control(component);
  app_karate_style_control_border(component, "gray");
}
