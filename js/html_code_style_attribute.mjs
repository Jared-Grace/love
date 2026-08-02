import { list_map_join_separator } from "./list_map_join_separator.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
export function html_code_style_attribute(style) {
  "one style, held as plain data, rendered as an html style attribute. that lets a single style source be both assigned to live dom and written into a static html string, so the two cannot drift apart";
  let properties = properties_get(style);
  function declaration(property) {
    let value = property_get(style, property);
    let pair = text_combine_3(property, ":", value);
    return pair;
  }
  let body = list_map_join_separator(properties, declaration, ";");
  let r = text_combine_3(' style="', body, '"');
  return r;
}
