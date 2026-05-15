import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_includes_not_multiple } from "../../../love/public/src/text_includes_not_multiple.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property_text_includes_not_multiple(list, parts) {
  function lambda(item) {
    let value = property_get(object, property_name);
    let n = text_includes_not_multiple(item, parts);
    return n;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
