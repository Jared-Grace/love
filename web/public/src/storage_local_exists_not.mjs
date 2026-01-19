import { undefined } from "../../../love/public/src/undefined.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists_not(app_fn, key) {
  marker("1");
  let v = undefined(app_fn, key);
  return v;
}
