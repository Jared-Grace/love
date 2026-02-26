import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { firebase_storage_url_project_jg } from "../../../love/public/src/firebase_storage_url_project_jg.mjs";
export async function firebase_storage_download_json_jg(destination) {
  let project_url = firebase_storage_url_project_jg();
  let o = await firebase_storage_download_json(project_url, destination);
  return o;
}
