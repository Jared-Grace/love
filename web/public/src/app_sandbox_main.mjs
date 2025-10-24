import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { storage_local_initialize } from "../../../love/public/src/storage_local_initialize.mjs";
import { app_message } from "../../../love/public/src/app_message.mjs";
import { app_message_provide_travel } from "../../../love/public/src/app_message_provide_travel.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_message_provide_food } from "./app_message_provide_food.mjs";
export function app_sandbox_main() {
  let root = html_document_body();
  marker("1");
  let app_fn = app_message;
  let context = {
    app_fn,
    root,
    screens: {
      provide_travel: app_message_provide_travel,
      app_message_provide_food: app_message_provide_food,
    },
  };
  let screen_name = storage_local_initialize(
    app_fn,
    "screen",
    "provide_travel",
  );
  app_generic_refresh(context);
  app_message_provide_travel(context);
}
