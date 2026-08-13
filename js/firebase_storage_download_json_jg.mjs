import { firebase_storage_download_json } from "./firebase_storage_download_json.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
export async function firebase_storage_download_json_jg(destination) {
  "The JSON kept at a name in this project's own storage, fetched without the caller having to know which project that is.";
  let project_url = firebase_storage_url_project_jg();
  let o = await firebase_storage_download_json(project_url, destination);
  return o;
}
