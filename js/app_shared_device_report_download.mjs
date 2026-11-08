import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { app_shared_device_report_folder } from "./app_shared_device_report_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { firebase_storage_json_download_prefix } from "./firebase_storage_json_download_prefix.mjs";
export async function app_shared_device_report_download() {
  "every device report sent so far, read back - one per device per site, each the last one that device sent";
  let opening = messages_firebase_path();
  let folder = app_shared_device_report_folder();
  let prefix = text_combine(opening, folder);
  let downloads = await firebase_storage_json_download_prefix(prefix);
  return downloads;
}
