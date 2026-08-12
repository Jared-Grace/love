export function html_parse_text_set(d, item, text) {
  "Puts words inside one element of a parsed page, in place of whatever was there.";
  "The reading beside this one takes words out. Putting them in is what lets a page be marked before it is flattened - a page turned into one run of words forgets where its elements were, and a mark written into an element survives that flattening and says where.";
  d(item).text(text);
}
