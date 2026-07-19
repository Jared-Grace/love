import { html_a } from "./html_a.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
// An anchor to a source URL, opened in a new tab, with the link affordances
// (cursor, no underline, inline-block) but NO chip look — the caller layers on
// the dark chip or the light note-chip styling. Shared so every source link in
// the app behaves identically.
export function example_source_link_dom(parent, text, url) {
  let link = html_a(parent);
  html_text_content_set(link, text);
  html_attribute_set(link, "href", url);
  html_attribute_set(link, "target", "_blank");
  html_style_set(link, "text-decoration", "none");
  html_style_set(link, "cursor", "pointer");
  html_style_set(link, "display", "inline-block");
  return link;
}
