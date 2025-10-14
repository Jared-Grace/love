import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
export function reply_matches(possbilities) {
  let filtered2 = list_filter_property(possbilities, "matches", true);
  return filtered2;
}
