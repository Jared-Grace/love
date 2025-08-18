import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { marker } from "./marker.mjs";
export function list_not_is(value) {
  marker("1");
  let a = list_is(value);
  let l = not(a);
  return l;
}
