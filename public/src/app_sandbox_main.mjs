import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { app_message } from "../../../love/public/src/app_message.mjs";
import { app_message_provide_travel } from "../../../love/public/src/app_message_provide_travel.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_message_provide_food } from "./app_message_provide_food.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_sandbox_main(context) {
  let root = object_property_get(context, "root");
  html_clear(root);
  let p = html_p_text(root, "text");
  return;
  marker("1");
  let app_fn = app_message;
  object_merge(context, {
    app_fn,
    screens: {
      provide_travel: app_message_provide_travel,
      provide_food: app_message_provide_food,
    },
  });
  app_generic_refresh(context);
}
