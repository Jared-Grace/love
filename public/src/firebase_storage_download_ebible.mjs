import { firebase_storage_download_json } from "./firebase_storage_download_json.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export async function firebase_storage_download_ebible(en, file_name) {
  let destination = ebible_firebase_upload_path(en, file_name);
  let index = await firebase_storage_download_json(destination);
  return index;
}
