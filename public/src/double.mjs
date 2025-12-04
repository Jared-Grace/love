import { multiply } from "../../../love/public/src/multiply.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function double(left, right) {
  marker("1");
  let p = multiply(left, right);
  return p;
}
