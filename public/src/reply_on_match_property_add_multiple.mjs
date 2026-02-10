import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function reply_on_match_property_add_multiple(
  possibility,
  property_name,
  items,
) {
  let outputs = property_get(possibility, property_name);
  list_add_multiple(outputs, items);
}
