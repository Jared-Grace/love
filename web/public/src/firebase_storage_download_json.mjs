import { json_from } from "./json_from.mjs";
import { buffer_string_to } from "./buffer_string_to.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
export async function firebase_storage_download_json(destination) {
  let buffer = await firebase_storage_download(destination);
  let s = buffer_string_to(buffer);
  let index = json_from(s);
  return index;
}
