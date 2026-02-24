import { error } from "../../../love/public/src/error.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
export async function firebase_storage_download_property(
  storage_path,
  property_name,
) {
  let project_url = error();
  let buffer = await firebase_storage_download(project_url, storage_path);
  const json = buffer_text_to(buffer);
  let o = json_from(json);
  let value = property_get(o, property_name);
  return value;
}
