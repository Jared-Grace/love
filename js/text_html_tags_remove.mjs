import { html_parse } from "./html_parse.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { property_get } from "./property_get.mjs";
export async function text_html_tags_remove(value) {
  "Take the markup off a piece of a page and hand back only what a reader would have seen.";
  "It goes through the same reader the rest of the repo parses pages with rather than cutting angle brackets out by hand, because the marks a page writes for a space or an ampersand have to come back as the characters they stand for - a hand-cut string leaves those sitting there spelled out, and a word compared against one never matches.";
  let parsed = await html_parse(value);
  let d = property_get(parsed, "d");
  let root = property_get(parsed, "root");
  let text = html_parse_text(d, root);
  return text;
}
