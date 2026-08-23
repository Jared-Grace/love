import { buffer_to_json } from "./buffer_to_json.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
import { app_shared_error_report_prefix } from "./app_shared_error_report_prefix.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function app_error_report_download() {
  ("every device's error report, read back - one entry per device that has hit an error, each holding the last few it hit");
  ("The sibling of the message reader beside it. What people write and what breaks without them writing arrive in the same place because that place is the only one a browser may write to at all, and they are told apart by which folder they landed in.");
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: app_shared_error_report_prefix(),
  });
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
