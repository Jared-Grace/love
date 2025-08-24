import { list_slice } from "./list_slice.mjs";
import { marker } from "./marker.mjs";
export function list_take(list, a, b) {
  marker("1");
  return list_slice(list, a, b);
}
