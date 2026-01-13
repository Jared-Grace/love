import { marker } from "../../../love/public/src/marker.mjs";
export function html_hash_set() {
  marker("1");
  let v = window.location.hash;
  return v;
}
