import { lists_size_max } from "./lists_size_max.mjs";
import { lists_get_or_null } from "./lists_get_or_null.mjs";
import { each_multiple_generic } from "./each_multiple_generic.mjs";
export function each_multiple_or_null(lists, lambda) {
  let getter = lists_get_or_null;
  each_multiple_generic(lists, getter, lists_size_max, lambda);
}
