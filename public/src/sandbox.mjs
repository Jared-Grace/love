import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  storage_local_set(app_fn, key, value);
}
