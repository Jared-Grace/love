import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { each_multiple_generic } from "../../../love/public/src/each_multiple_generic.mjs";
export function each_multiple(lists, lambda) {
  let getter = lists_get;
  each_multiple_generic(lists, getter, lambda);
}
