import { html_element } from "./html_element.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_is } from "./text_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { example_note_code_dom } from "./example_note_code_dom.mjs";
// A note is either a plain string, or a list of segments: plain-text strings plus
// inline-code parts — { code } (a fn name, derived via .name in the example) or
// { alias: true } (the example's own derived alias). Code parts render as inline
// code so alias/fn references stand out and aren't hardcoded prose.
export function example_note_dom(parent, note, alias) {
  let paragraph = html_element(parent, "p");
  html_style_set(paragraph, "color", "#555");
  html_style_set(paragraph, "line-height", "1.6");
  html_style_set(paragraph, "margin", "0 0 0.75rem");
  if (text_is(note)) {
    html_text_content_set(paragraph, note);
    return paragraph;
  }
  for (let segment of note) {
    if (text_is(segment)) {
      let span = html_span(paragraph);
      html_text_content_set(span, segment);
    } else if (property_get_or_null(segment, "alias")) {
      example_note_code_dom(paragraph, alias);
    } else {
      example_note_code_dom(paragraph, property_get(segment, "code"));
    }
  }
  return paragraph;
}
