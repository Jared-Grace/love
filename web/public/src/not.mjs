import { marker } from "./marker.mjs";
export function not(a) {
  marker("1");
  let v = !a;
  return v;
}
