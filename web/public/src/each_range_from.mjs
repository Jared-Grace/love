import { marker } from "./marker.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range_from(count, lambda) {
  marker("1");
  let list = range(count);
  each(list, lambda);
}
