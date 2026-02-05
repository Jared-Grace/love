import { marker } from "../../../love/public/src/marker.mjs";
export function number_pad(num, count) {
  let v = String(num).padStart(count, "0");
  return v;
}
