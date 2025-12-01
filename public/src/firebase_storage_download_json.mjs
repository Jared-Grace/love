import { firebase_storage_download_string } from "../../../love/public/src/firebase_storage_download_string.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function firebase_storage_download_json(destination) {
  let s = await firebase_storage_download_string(destination);
  let o = json_from(s);
  return o;
}
