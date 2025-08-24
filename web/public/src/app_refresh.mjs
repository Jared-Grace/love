import { object_property_get } from "./object_property_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { marker } from "./marker.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_refresh(context) {
  let { app_fn, screens } = context;
  let body = html_document_body();
  html_clear(body);
  marker("1");
  let screen_name = storage_local_initialize(app_fn, "screen", "home");
  let screen = object_property_get(screens, screen_name);
  screen(context);
}
