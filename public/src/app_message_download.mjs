import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
import { app_message_firebase_path } from "../../../love/public/src/app_message_firebase_path.mjs";
import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
export async function app_message_download() {
  const bucket = await firebase_bucket();
  const [files] = await bucket.getFiles({
    prefix: app_message_firebase_path(),
  });
  async function lambda(item) {
    let name2 = property_get(item, "name");
    let buffer = await firebase_storage_download(name2);
    let s = buffer_text_to(buffer);
    let o = json_from(s);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
