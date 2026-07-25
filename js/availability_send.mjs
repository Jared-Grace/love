import { availability_firebase_path } from "./availability_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
export async function availability_send(uid, ranges) {
  "save the owner's weekly availability windows to Firebase as one file under their user folder, replacing the previous availability";
  let base = availability_firebase_path(uid);
  let path = file_name_json(base);
  await firebase_upload_object_browser(path, ranges);
}
