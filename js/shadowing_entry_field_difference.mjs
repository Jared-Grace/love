import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entry_field_difference(entry, other, field_name) {
  "the names one entry holds under a rule that the matching entry does not hold under the same rule";
  let list = property_get(entry, field_name);
  let list_other = property_get(other, field_name);
  let difference = list_difference(list, list_other);
  return difference;
}
