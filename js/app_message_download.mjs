import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { json_from } from "./json_from.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function app_message_download() {
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: messages_firebase_path(),
  });
  async function lambda(item) {
    let name = property_get(item, "name");
    let project_url = firebase_storage_url_project_jg();
    let buffer = await firebase_storage_download(project_url, name);
    let s = buffer_text_to(buffer);
    let o = json_from(s);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
