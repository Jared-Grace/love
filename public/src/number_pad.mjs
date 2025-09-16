import { marker } from "./marker.mjs";
export function number_pad(num) {
  marker("1");
  let v = String(num).padStart(length, "0");
  return v;
}
