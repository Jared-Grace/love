import { range } from "./range.mjs";
import { marker } from "./marker.mjs";
export function range_from(count) {
  marker("1");
  let r = range(count);
  return r;
}
