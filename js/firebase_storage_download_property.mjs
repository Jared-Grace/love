import { buffer_to_json } from "./buffer_to_json.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
export async function firebase_storage_download_property(
  project_url,
  storage_path,
  property_name,
) {
  let buffer = await firebase_storage_download(project_url, storage_path);
  let o = buffer_to_json(buffer);
  let value = property_get(o, property_name);
  return value;
}
