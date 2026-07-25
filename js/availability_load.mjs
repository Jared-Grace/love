import { availability_firebase_path } from "./availability_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_storage_download_json_jg } from "./firebase_storage_download_json_jg.mjs";
export async function availability_load(uid) {
  "load the owner's saved weekly availability windows from Firebase; an empty list if nothing has been saved yet";
  let base = availability_firebase_path(uid);
  let path = file_name_json(base);
  let ranges = [];
  try {
    ranges = await firebase_storage_download_json_jg(path);
  } catch (e) {}
  return ranges;
}
