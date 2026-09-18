import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_index_member_is } from "./g_coordinates_index_member_is.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
export function g_coordinates_outside_index(coordinates, index) {
  arguments_assert(arguments, 2);
  ("The squares of a list that are not in a given set of squares.");
  ("Said once because it is asked wherever a kind of square is out of bounds: where somebody may be set down, where somebody may be pushed to. The set is an index rather than a list, so a square is looked up rather than searched for, and a crowd being parted asks this of the whole map.");
  let member_is = g_coordinates_index_member_is(index);
  let outside = list_filter_not(coordinates, member_is);
  return outside;
}
