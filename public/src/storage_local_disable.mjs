import { storage_local_enable_set } from "../../../love/public/src/storage_local_enable_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_disable() {
  marker("1");
  const v = false;
  storage_local_enable_set(v);
}
