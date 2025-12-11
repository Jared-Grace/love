import { marker } from "../../../love/public/src/marker.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
export function app_a_identifier(parent, local) {
  marker("1");
  js_identifier_is_assert(local);
  let name = object_property_get(local, "name");
  let span = html_span_text(parent, name);
  html_font_color_set(span, "#1717b8ff");
}
