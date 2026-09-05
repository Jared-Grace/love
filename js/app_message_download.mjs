import { app_message_files } from "./app_message_files.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_message_download() {
  "what people have written, read back - one entry per message file, as the record inside it";
  "Which files those are is asked of the listing beside this rather than worked out here, because the other reader of the same set keeps them on disk instead of opening them, and two spellings of what counts as a message would come to disagree.";
  let files = await app_message_files();
  async function lambda(item) {
    let name = property_get(item, "name");
    let project_url = firebase_storage_url_project_jg();
    let buffer = await firebase_storage_download(project_url, name);
    let o = buffer_to_json(buffer);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
