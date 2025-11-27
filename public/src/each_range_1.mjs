import { range_1 } from "../../../love/public/src/range_1.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_1(count, lambda$i) {
  marker("1");
  let list = range_1(count);
  each(list, lambda$i);
}
