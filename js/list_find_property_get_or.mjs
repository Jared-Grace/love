import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function list_find_property_get_or(
  list,
  property_find,
  value,
  property_get_value,
  value_not,
) {
  "The one item in a list carrying the named value, read for another of its properties - and the fallback instead, when the list holds no such item.";
  "The reading beside this one insists the item is there and stops everything when it is not. That is right where an absent item means the list was built wrong, and wrong where two lists are simply allowed to differ: two bibles, where one carries a verse the other prints as a footnote and leaves out.";
  let item = list_find_property_or_null(list, property_find, value);
  let missing = null_is(item);
  if (missing) {
    return value_not;
  }
  let g = property_get(item, property_get_value);
  return g;
}
