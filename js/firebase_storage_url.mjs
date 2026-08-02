import { firebase_storage_url_metadata } from "./firebase_storage_url_metadata.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function firebase_storage_url(storage_path, project_url) {
  let url = firebase_storage_url_metadata(storage_path, project_url);
  let combined = text_combine_multiple([url, "?alt=media"]);
  return combined;
}
