import { firebase_storage_download_text } from "../../../love/public/src/firebase_storage_download_text.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function firebase_storage_download_json(destination) {
  let s = await firebase_storage_download_text(destination);
  let o = json_from(s);
  return o;
}
