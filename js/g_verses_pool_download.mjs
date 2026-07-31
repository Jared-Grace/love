import { firebase_storage_verses_download_cache } from "./firebase_storage_verses_download_cache.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_verses_pool_destination } from "./g_verses_pool_destination.mjs";
export async function g_verses_pool_download(name) {
  ("download a named verse pool ({verses:[{reference,text}]}) in ONE request (the supper-style batch); pairs with ",
    fn_name("g_verses_pool_upload"));
  let destination = g_verses_pool_destination(name);
  let verses = await firebase_storage_verses_download_cache(destination);
  return verses;
}
