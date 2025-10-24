import { null_is } from "../../../love/public/src/null_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let app_fn = sandbox;
  const key = "test";
  let value = storage_local_get(app_fn, key);
  let n = null_is(value2);
  assert(b);
  storage_local_set(app_fn, key, 123);
}
