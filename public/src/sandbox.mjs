import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let app_fn = sandbox;
  let value = storage_local_get(app_fn, key);
  storage_local_set(app_fn, "test", 123);
}
