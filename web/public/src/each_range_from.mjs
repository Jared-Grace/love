import { range_from } from "../../../love/public/src/range_from.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_from(from, to, lambda$item) {
  marker("1");
  let list = range_from(from, to);
  each(list, lambda$item);
}
