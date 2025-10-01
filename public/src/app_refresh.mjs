import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_initialize } from "../../../love/public/src/storage_local_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export async function app_refresh(context) {
  let { app_fn, screens } = context;
  let body = html_document_body();
  html_clear(body);
  marker("1");
  let screen_name = storage_local_initialize(app_fn, "screen", "home");
  let screen = object_property_get(screens, screen_name);
  screen(context);
}
