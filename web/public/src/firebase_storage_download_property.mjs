import { json_from } from "./json_from.mjs";
import { buffer_string_to } from "./buffer_string_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
export async function firebase_storage_download_property(
  storage_path,
  property_name,
) {
  let buffer = await firebase_storage_download(storage_path);
  const json = buffer_string_to(buffer);
  let o = json_from(json);
  let value = object_property_get(o, property_name);
  return value;
}
