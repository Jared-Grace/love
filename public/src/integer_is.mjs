import { marker } from "../../../love/public/src/marker.mjs";
export function integer_is(value) {
  marker("1");
  let ii = Number.isInteger(value);
  return ii;
}
