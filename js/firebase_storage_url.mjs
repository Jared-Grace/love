import { text_replace } from "./text_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function firebase_storage_url(storage_path, project_url) {
  let replaced = text_replace(storage_path, "/", "%2F");
  let url = text_combine_multiple([
    "https://firebasestorage.googleapis.com/v0/b/",
    project_url,
    "/o/",
    replaced,
    "?alt=media",
  ]);
  return url;
}
