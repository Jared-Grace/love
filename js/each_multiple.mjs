import { lists_size_max } from "./lists_size_max.mjs";
import { lists_get } from "./lists_get.mjs";
import { each_multiple_generic } from "./each_multiple_generic.mjs";
export function each_multiple(lists, lambda) {
  let getter = lists_get;
  each_multiple_generic(lists, getter, lists_size_max, lambda);
}
