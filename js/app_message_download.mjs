import { app_shared_error_report_prefix } from "./app_shared_error_report_prefix.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function app_message_download() {
  "what people have written, and only that: the error reports land under the same opening because it is the only place a browser may write at all, so the folder they sit in is skipped here rather than read as somebody's message";
  let bucket = await firebase_bucket();
  let [all] = await bucket.getFiles({
    prefix: messages_firebase_path(),
  });
  let error_prefix = app_shared_error_report_prefix();
  function written_by_a_person(item) {
    let name = property_get(item, "name");
    let outside = text_starts_with_not(name, error_prefix);
    return outside;
  }
  let files = list_filter(all, written_by_a_person);
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
