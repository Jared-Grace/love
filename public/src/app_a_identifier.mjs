import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
import { app_a_keyword_blue } from "../../../love/public/src/app_a_keyword_blue.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_identifier(a) {
  let node = object_property_get(a, "node");
  let parent = object_property_get(a, "parent");
  let name = object_property_get(node, "name");
  let a2 = js_special_arguments();
  let span = null;
  if (equal(name, a2)) {
    span = app_a_keyword_blue(parent, name);
  } else {
    span = html_span_text(parent, name);
    html_font_color_set(span, "#4a4affff");
  }
  app_a_identifier_generic(a);
}
