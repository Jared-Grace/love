import { html_element } from "./html_element.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_is } from "./text_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { example_note_code_dom } from "./example_note_code_dom.mjs";
import { example_note_link_dom } from "./example_note_link_dom.mjs";
import { text_combine } from "./text_combine.mjs";
// A note is either a plain string, or a list of segments: plain-text strings plus
// inline-code parts — { fn: X.name } (a real fn, derived via .name → renders as a
// GitHub source link; add call: true to show it as a call "X()", parens included
// in the code so a call isn't split half-code/half-prose), { code: "literal" } (a
// genuine literal like `let` — plain, nothing to link to), or { alias: true } (the
// example's derived alias). Code parts render inline so refs aren't hardcoded prose.
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
    } else if (property_get_or_null(segment, "fn")) {
      let fn = property_get(segment, "fn");
      let shown = property_get_or_null(segment, "call") ? text_combine(fn, "()") : fn;
      example_note_link_dom(paragraph, fn, shown);
    } else {
      example_note_code_dom(paragraph, property_get(segment, "code"));
    }
  }
  return paragraph;
}
