import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(possbilities) {
    possbilities = fn(possbilities);
    let filtered = list_filter_property(list, property_name, property_value);
    if (matches) {
      on_match(possbilities);
    }
    return matches;
  };
  return matcher;
}
