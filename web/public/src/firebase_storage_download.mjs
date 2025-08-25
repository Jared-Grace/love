import { http_json } from "./http_json.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export async function firebase_storage_download(destination_version) {
  let url = firebase_storage_url(destination_version);
  let parsed = await http_json(url);
  return parsed;
}
