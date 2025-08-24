import { list_slice } from "./list_slice.mjs";
import { marker } from "./marker.mjs";
export function list_take(list, count) {
  marker("1");
  let taken = list_slice(list, 0, count);
  return taken;
}
