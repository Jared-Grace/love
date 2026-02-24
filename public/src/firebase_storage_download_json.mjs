import { error } from "../../../love/public/src/error.mjs";
import { firebase_storage_download_text } from "../../../love/public/src/firebase_storage_download_text.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function firebase_storage_download_json(destination) {
  let project_url = error();
  let s = await firebase_storage_download_text(destination, project_url);
  let o = json_from(s);
  return o;
}
