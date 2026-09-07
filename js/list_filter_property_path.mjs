import { arguments_assert } from "./arguments_assert.mjs";
import { property_path_get_is } from "./property_path_get_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property_path(list, property_names, value) {
  arguments_assert(arguments, 3);
  ("The items of a list whose value at the end of a run of names is the one asked about - the plain half of the pair whose other half keeps the items where it is anything else.");
  ("A run of names rather than one name is what lets a list be cut on something a step inside its items, which is where an answer usually sits once the items carry a record of their own rather than a flat set of fields.");
  let c = function list_filter_property_path_inner(item) {
    let result = property_path_get_is(item, property_names, value);
    return result;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
