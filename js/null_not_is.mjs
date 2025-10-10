import { marker } from "../../../love/public/src/marker.mjs";
export function null_not_is(value) {
  marker("1");
  let nn = value !== null;
  return nn;
}
