import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_element_fake_text(element) {
  "Everything written into a stand-in element and into everything appended under it, read back as one piece of text in the order it was drawn.";
  let own = property_get(element, "innerHTML");
  let children = property_get(element, "children");
  let inner = list_map_join_empty(children, html_element_fake_text);
  let r = text_combine(own, inner);
  return r;
}
