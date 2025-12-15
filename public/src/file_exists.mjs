import { app_api_cache_storage_local_fn } from "../../../love/public/src/app_api_cache_storage_local_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { promise_is } from "../../../love/public/src/promise_is.mjs";
export async function file_exists(file_path) {
  if (browser_is()) {
    let r = await app_api_cache_storage_local_fn(file_exists, arguments);
    return r;
  }
  marker("1");
  if (promise_is(file_path)) {
    error();
  }
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  let exists = await throws_not_async(lambda);
  async function lambda() {
    await access(file_path, constants.F_OK);
  }
  return exists;
}
