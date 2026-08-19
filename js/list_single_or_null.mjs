import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_single } from "./list_single.mjs";
export function list_single_or_null(list) {
  "The one thing in this list, or nothing when the list is empty.";
  "Empty is an answer and more than one is a fault, and keeping those apart is the whole of it. Insisting on one thing where nothing was ever promised stops a whole reading at the first gap; letting several through where one was promised hands back whichever sorted first and says nothing about the rest.";
  "Two searches ended in these same four lines - the read-aloud file for a chapter, and the one thing in a list a test picked out. What differs between them is how the list was narrowed, which is the part worth reading, and this is the part that was not.";
  arguments_assert(arguments, 1);
  let empty_is = list_empty_is(list);
  if (empty_is) {
    return null;
  }
  let only = list_single(list);
  return only;
}
