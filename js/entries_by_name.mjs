import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function entries_by_name(entries) {
  "entries keyed by function name, so a comparison can look one up instead of scanning the whole list once per function";
  let by_name = {};
  function record(entry) {
    let name = property_get(entry, "name");
    property_set(by_name, name, entry);
  }
  each(entries, record);
  return by_name;
}
