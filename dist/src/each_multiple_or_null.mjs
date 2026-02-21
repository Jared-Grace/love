import { lists_get_or_null } from "../../../love/public/src/lists_get_or_null.mjs";
import { each_multiple_generic } from "../../../love/public/src/each_multiple_generic.mjs";
export function each_multiple_or_null(lists, lambda) {
  let getter = lists_get_or_null;
  each_multiple_generic(lists, getter, lambda);
}
