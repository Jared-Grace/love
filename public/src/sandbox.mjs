import { npm_install } from "../../../love/public/src/npm_install.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let app_fn = sandbox;
  const key = "test";
  let value = storage_local_get(app_fn, key);
  await npm_install(package_name);
  assert(b);
  storage_local_set(app_fn, key, 123);
}
