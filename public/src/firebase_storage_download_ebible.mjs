import { firebase_storage_download_json_jg } from "../../../love/public/src/firebase_storage_download_json_jg.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
export async function firebase_storage_download_ebible(en, file_name) {
  let destination = ebible_firebase_upload_path(en, file_name);
  let o = await firebase_storage_download_json_jg(destination, destination2);
  return o;
}
