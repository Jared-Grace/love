import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function list_unique_sorted(list) {
  arguments_assert(arguments, 1);
  ("The values of a list, each kept once, in text order - the shape a list of names is put into whenever it is about to be written down or read by a person.");
  ("★ THE LIST HANDED IN IS NOT TOUCHED, AND IT IS THE UNIQUING THAT MAKES THAT TRUE. Sorting by text sorts the list it is given in place and hands that same list back, so on its own it would reorder the caller's list under them. It is safe here only because keeping each value once copies first, and the sort therefore lands on the copy. Anything that later takes the uniquing out of this run puts that hazard back.");
  ("The two steps are written in this order rather than the other because sorting first would sort values that are about to be thrown away. Either order answers the same, so the choice is only about how much sorting is paid for.");
  let unique = list_unique(list);
  let sorted = list_sort_text(unique);
  return sorted;
}
