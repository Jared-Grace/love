import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { integer_is } from "./integer_is.mjs";
import { list_max } from "./list_max.mjs";
export function list_max_try(mapped) {
  "$plain mapped";
  "The largest of the whole numbers in a list, with anything that is not one left out.";
  arguments_assert(arguments, 1);
  let filtered = list_filter(mapped, integer_is);
  let right = list_max(filtered);
  return right;
}
