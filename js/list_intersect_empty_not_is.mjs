import { arguments_assert } from "./arguments_assert.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_intersect_empty_not_is(list, other) {
  "Whether these two lists have anything at all in common.";
  "The question a single thing is asked of a list with, asked of two lists instead. Where one thing can answer to several names and so can the other, having a name in common is what being the same thing means, and neither side can be reduced to one name first without choosing for the other.";
  "Nothing is said about how much they share. A caller wanting that has the intersection itself to ask, and a caller wanting to know whether to go on does not.";
  arguments_assert(arguments, 2);
  let shared = list_intersect(list, other);
  let any = list_empty_not_is(shared);
  return any;
}
