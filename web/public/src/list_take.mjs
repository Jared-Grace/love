import { list_slice } from "./list_slice.mjs";
import { marker } from "./marker.mjs";
export function list_take(list, a, b) {
  marker("1");
  let v = list_slice(list, a, b);
  return v;
}
