import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_books(context) {
  marker("1");
  let root = object_property_get(context, "root");
  html_clear(root);
}
