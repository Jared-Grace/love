import { property_set } from "../../../love/public/src/property_set.mjs";
export function html_title_set(title) {
  property_set(document, "title", title);
}
