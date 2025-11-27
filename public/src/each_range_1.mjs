import { marker } from "../../../love/public/src/marker.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_1(count, lambda$i) {
  marker("1");
  let list = range(count);
  each(list, lambda$i);
}
