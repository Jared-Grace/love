import { marker } from "./marker.mjs";
export function object_assign(to, from) {
  marker("1");
  let a = Object.assign(to, from);
  return a;
}
