import { json_from } from "./json_from.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
export async function firebase_storage_download_property(
  project_url,
  storage_path,
  property_name,
) {
  let buffer = await firebase_storage_download(project_url, storage_path);
  let json = buffer_text_to(buffer);
  let o = json_from(json);
  let value = property_get(o, property_name);
  return value;
}
