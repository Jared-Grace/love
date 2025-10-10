import { marker } from "../../../love/public/src/marker.mjs";
let global = {};
export function global_get() {
  marker("1");
  return global;
}
