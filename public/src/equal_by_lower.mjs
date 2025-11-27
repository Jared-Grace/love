import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function equal_by_lower(a, b, lambda$item) {
  marker("1");
  let eq = equal_by(a, b, lambda$item);
  return eq;
}
