import { lists_get_or_null } from "../../../love/public/src/lists_get_or_null.mjs";
import { each_multiple_generic } from "../../../love/public/src/each_multiple_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_multiple_or_null(lists, lambda) {
  marker("1");
  let getter = lists_get_or_null;
  each_multiple_generic(lists, getter, lambda);
}
