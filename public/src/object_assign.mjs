import { marker } from "./marker.mjs";
export function object_assign() {
  marker("1");
  let v = Object.assign({});
  return v;
}
