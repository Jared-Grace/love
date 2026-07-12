import { firebase_storage_download_json_jg } from "./firebase_storage_download_json_jg.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export async function firebase_storage_download_ebible(en, file_name) {
  let destination = ebible_firebase_upload_path(en, file_name);
  let o = await firebase_storage_download_json_jg(destination);
  return o;
}
