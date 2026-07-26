import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join } from "./list_join.mjs";
export function html_code_style_attribute(style) {
  "one style, held as plain data, rendered as an html style attribute. that lets a single style source be both assigned to live dom and written into a static html string, so the two cannot drift apart";
  let properties = properties_get(style);
  function declaration(property) {
    let value = property_get(style, property);
    let named = text_combine(property, ":");
    let pair = text_combine(named, value);
    return pair;
  }
  let declarations = list_map(properties, declaration);
  let body = list_join(declarations, ";");
  let opened = text_combine(' style="', body);
  let r = text_combine(opened, '"');
  return r;
}
