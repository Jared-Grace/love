import { list_filter_property } from "./list_filter_property.mjs";
export function reply_matches(possbilities) {
  let filtered = list_filter_property(possbilities, "matches", true);
  return filtered;
}
