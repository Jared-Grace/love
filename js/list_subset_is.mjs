import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_subset_is(list, list_other) {
  "Whether everything one list holds also stands in the other.";
  let difference = list_difference(list, list_other);
  let inside = list_empty_is(difference);
  return inside;
}
