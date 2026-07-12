import { property_set } from "./property_set.mjs";
export function html_title_set(title) {
  property_set(document, "title", title);
}
