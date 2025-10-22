import { app_message } from "../../../love/public/src/app_message.mjs";
import { app_message_provide_travel } from "../../../love/public/src/app_message_provide_travel.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_sandbox_main() {
  let root = html_document_body();
  marker("1");
  let context = {
    app_fn: app_message,
    root,
  };
  app_message_provide_travel(context);
}
