import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(possbilities) {
    possbilities = fn(possbilities);
    let filtered = list_filter_property(possbilities, "matches", true);
    let ne = list_empty_not_is(list);
    if (matches) {
      on_match(possbilities);
    }
    return matches;
  };
  return matcher;
}
