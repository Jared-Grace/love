import { firebase_storage_download_text } from "./firebase_storage_download_text.mjs";
import { json_from } from "./json_from.mjs";
export async function firebase_storage_download_json(project_url, destination) {
  let s = await firebase_storage_download_text(project_url, destination);
  let o = json_from(s);
  return o;
}
