import { firebase_storage_url_metadata } from "./firebase_storage_url_metadata.mjs";
import { http_json } from "./http_json.mjs";
export async function firebase_storage_object_metadata(
  project_url,
  storage_path,
) {
  "Everything storage will say about one file without handing the file over.";
  let url = firebase_storage_url_metadata(storage_path, project_url);
  let o = await http_json(url, {});
  return o;
}
