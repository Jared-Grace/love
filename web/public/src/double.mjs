import { multiply } from "../../../love/public/src/multiply.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function double(left) {
  marker("1");
  let p = multiply(left, 2);
  return p;
}
