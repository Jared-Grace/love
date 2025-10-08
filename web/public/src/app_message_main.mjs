import { html_placeholder } from "../../../love/public/src/html_placeholder.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_karate_container } from "../../../karate_code/public/src/app_karate_container.mjs";
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
  let div = app_karate_container(root);
  let div2 = html_div_text(div, "Please enter your message for me:");
  let textarea = html_element(div, "textarea");
  html_placeholder(textarea, "Please enter your message here");
  app_karate_style_control(textarea);
  app_karate_style_control_border(textarea, "gray");
  hf;
}
