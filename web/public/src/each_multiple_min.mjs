import { lists_size_max } from "../../../love/public/src/lists_size_max.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { each_multiple_generic } from "../../../love/public/src/each_multiple_generic.mjs";
export function each_multiple_min(lists, lambda) {
  let getter = lists_get;
  each_multiple_generic(lists, getter, lambda, lists_size_max);
}
