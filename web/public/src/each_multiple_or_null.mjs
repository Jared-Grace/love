import { each_multiple_generic } from "../../../love/public/src/each_multiple_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
export function each_multiple_or_null(lists, lambda) {
  marker("1");
  let getter = lists_get;
  each_multiple_generic(lists, getter, lambda);
}
