import { marker } from "./marker.mjs";
export function number_pad(num, count) {
  marker("1");
  let v = String(num).padStart(count, "0");
  return v;
}
