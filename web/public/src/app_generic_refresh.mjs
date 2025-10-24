import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function app_generic_refresh(context) {
  let { app_fn, screens } = context;
  let body = html_document_body();
  html_clear(body);
  marker("1");
  let screen_name = storage_local_initialize_context(context, "screen", "home");
  let screen = object_property_get(screens, screen_name);
  screen(context);
}
