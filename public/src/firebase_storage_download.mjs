import { log } from "./log.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { http_json } from "./http_json.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export async function firebase_storage_download(destination) {
  destination = firebase_path_fix(destination);
  log({
    destination,
  });
  let url = firebase_storage_url(destination);
  let parsed = await http_json(url);
  return parsed;
}
