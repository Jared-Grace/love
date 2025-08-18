import { list_is } from "./list_is.mjs";
import { marker } from "./marker.mjs";
export function list_not_is(value) {
  marker("1");
  let l = list_is(value);
  return l;
}
