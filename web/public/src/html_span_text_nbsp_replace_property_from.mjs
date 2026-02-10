import { html_span_text_nbsp_replace } from "../../../love/public/src/html_span_text_nbsp_replace.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function html_span_text_nbsp_replace_property_from(parent, obj, prop) {
  let word = property_get(obj, prop);
  let span = html_span_text_nbsp_replace(parent, word);
  return span;
}
