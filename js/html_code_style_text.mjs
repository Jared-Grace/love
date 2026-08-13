import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { list_map_join_separator } from "./list_map_join_separator.mjs";
export function html_code_style_text(style) {
  "One style, held as plain data, written out as the run of text a style attribute holds - each property, a colon, its value, and a semicolon between them.";
  "It is kept apart from the attribute around it because the same run of text is wanted in two places: inside an attribute in a page that is written out as text, and handed to setAttribute by code building an element while it runs. Written once, the two cannot come to disagree.";
  arguments_assert(arguments, 1);
  let names = properties_get(style);
  function pair_of(name) {
    let value_of = property_get(style, name);
    let pair = text_combine_3(name, ":", value_of);
    return pair;
  }
  let r = list_map_join_separator(names, pair_of, ";");
  return r;
}
