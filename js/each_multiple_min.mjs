import { lists_size_min } from "./lists_size_min.mjs";
import { lists_get } from "./lists_get.mjs";
import { each_multiple_generic } from "./each_multiple_generic.mjs";
export function each_multiple_min(lists, lambda) {
  let getter = lists_get;
  each_multiple_generic(lists, getter, lists_size_min, lambda);
}
