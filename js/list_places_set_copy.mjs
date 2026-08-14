import { each_index } from "./each_index.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_get } from "./list_get.mjs";
import { list_set } from "./list_set.mjs";
export function list_places_set_copy(list, places, items) {
  "A second list, the same as the first except that the places named now hold the items given, taken in the order the places were named.";
  "The list handed in is left as it was, because a caller laying the same items out many ways over one original would otherwise be writing over the very thing it is copying from. So it is copied first and the copy is written into.";
  "It is the putting-down that answers the picking-up: what list_places_get gathered from these places can be dealt back to them in any order, and everything else in the line stays exactly where it was.";
  let copy = list_copy(list);
  function place(at, index) {
    let item = list_get(items, index);
    list_set(copy, at, item);
  }
  each_index(places, place);
  return copy;
}
