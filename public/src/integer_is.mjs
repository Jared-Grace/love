import { marker } from "./marker.mjs";
export function integer_is() {
  marker("1");
  let v = Number.isInteger(value);
  return v;
}
