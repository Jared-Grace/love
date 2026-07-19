import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { g_verses_pool_destination } from "./g_verses_pool_destination.mjs";
import { property_get } from "./property_get.mjs";
export async function g_verses_pool_download(name) {
  "download a named verse pool ({verses:[{reference,text}]}) in ONE request (the supper-style batch); pairs with g_verses_pool_upload";
  let destination = g_verses_pool_destination(name);
  let project_url = firebase_storage_url_project_jg();
  let o = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  let verses = property_get(o, "verses");
  return verses;
}
