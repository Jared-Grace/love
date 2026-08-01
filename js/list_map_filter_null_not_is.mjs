import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export function list_map_filter_null_not_is(list, mapper) {
  arguments_assert(arguments, 2);
  ("Turns each item into something else and keeps only the ones that came back with");
  ("an answer.");
  ("This is how a mapper says no: it hands back nothing for the items it has no");
  ("answer for, and the empty places are dropped rather than carried. The same pair");
  ("waiting on several answers at once was already named; this is the plain one,");
  ("which somehow was not.");
  let mapped = list_map(list, mapper);
  let present = list_filter_null_not_is(mapped);
  return present;
}
