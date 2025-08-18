import { list_is } from "./list_is.mjs";
import { marker } from "./marker.mjs";
export function list_not_is(value) {
  marker("1");
  return list_is(value);
}
