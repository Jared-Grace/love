import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entry_or_empty(by_name, name) {
  "the entry for this function, or one that shadows nothing — a function absent from the other side of a comparison means it shadowed no names there, not that a lookup failed";
  let exists = property_exists(by_name, name);
  if (exists) {
    let entry = property_get(by_name, name);
    return entry;
  }
  let empty = {
    name,
    duplicated: [],
    shadowed: [],
  };
  return empty;
}
