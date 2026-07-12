import { app_a_color_literal } from "./app_a_color_literal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_raw(node, parent) {
  let raw = property_get(node, "raw");
  let component = html_span_text(parent, raw);
  app_a_color_literal(component);
  let v = {
    component,
    raw,
  };
  return v;
}
