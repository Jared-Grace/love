import { assert_not } from "../../../love/public/src/assert_not.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_set_exists_not(app_fn, key, value) {
  marker("1");
  assert_not(b);
  storage_local_set(app_fn, key, value);
}
