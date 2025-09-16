import { range_from } from "./range_from.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
export function each_range_from_async(from, to, lambda) {
  marker("1");
  let list = range_from(from, to);
  each(list, lambda);
}
