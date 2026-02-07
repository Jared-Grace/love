import { html_span_text_nbsp_replace } from "../../../love/public/src/html_span_text_nbsp_replace.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function html_span_text_nbsp_replace_property_from(parent, obj, prop) {
  let word = object_property_get(obj, prop);
  let span = html_span_text_nbsp_replace(parent, word);
  return span;
}
