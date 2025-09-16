import { each_range } from "./each_range.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
export function each_range_from(count, lambda) {
  marker("1");
  let list = each_range(count);
  each(list, lambda);
}
