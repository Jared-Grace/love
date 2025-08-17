import { marker } from "./marker.mjs";
export function integer_is() {
  marker("1");
  let ii = Number.isInteger(value);
  return ii;
}
