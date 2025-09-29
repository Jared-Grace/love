import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { firebase_storage_url_project } from "../../../love/public/src/firebase_storage_url_project.mjs";
export function firebase_storage_url(storage_path) {
  let replaced = string_replace(storage_path, "/", "%2F");
  let url =
    "https://firebasestorage.googleapis.com/v0/b/" +
    firebase_storage_url_project() +
    "/o/" +
    replaced +
    "?alt=media";
  return url;
}
