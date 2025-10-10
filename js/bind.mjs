import { marker } from "../../../love/public/src/marker.mjs";
export function bind(left, right) {
  marker("1");
  let fn = left.bind(right);
  return fn;
}
