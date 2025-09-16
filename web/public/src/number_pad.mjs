import { marker } from "./marker.mjs";
export function number_pad(num, length) {
  marker("1");
  let v = String(num).padStart(length, "0");
  return v;
}
