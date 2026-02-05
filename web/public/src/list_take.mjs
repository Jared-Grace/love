import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_take(list, count) {
  let taken = list_slice(list, 0, count);
  return taken;
}
