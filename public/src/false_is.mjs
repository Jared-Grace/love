import { marker } from "../../../love/public/src/marker.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function false_is(value) {
  marker("1");
  let ti = equal(value, true);
  return ti;
}
