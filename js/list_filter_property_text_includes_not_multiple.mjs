import { property_text_includes_not } from "./property_text_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property_text_includes_not_multiple(
  list,
  property_name,
  parts,
) {
  function lambda(item) {
    let n = property_text_includes_not(item, property_name, parts);
    return n;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
