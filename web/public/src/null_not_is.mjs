import { marker } from "./marker.mjs";
export function null_not_is(value) {
  marker("1");
  let v = value !== null;
  return v;
}
