import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_font_size_refresh_generic(context, value) {
  "Set the whole page to a size, given the size.";
  "Where the size comes from is the caller's business and everything after it is the same either way. A page reads its own; a page that hands its reading on to another reads that one's - and putting the size in the hands of the caller is what lets the second exist without a second copy of the styling underneath it.";
  arguments_assert(arguments, 2);
  let root = property_get(context, "root");
  let text = text_combine(value, "px");
  html_style_font_size(root, text);
}
