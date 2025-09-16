import { range_from } from "./range_from.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
export function each_range_from(count, lambda) {
  marker("1");
  let list = range_from(count);
  each(list, lambda);
}
