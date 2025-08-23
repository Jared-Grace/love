import { object_property_get } from "./object_property_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_replace_home } from "./app_replace_home.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let app_fn = app_replace;
  let screens = {
    home: app_replace_home,
  };
  let root = html_document_body();
  html_clear(root);
  marker("1");
  let screen_name = storage_local_get(app_fn, "screen");
  let screen = object_property_get(screens, screen_name);
  screen({
    app_fn,
    root,
  });
}
