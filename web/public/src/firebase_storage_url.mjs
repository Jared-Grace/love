import { string_replace } from "./string_replace.mjs";
import { firebase_storage_url_project } from "./firebase_storage_url_project.mjs";
export function firebase_storage_url(destination_version) {
  let replaced = string_replace(destination_version, "/", "%2F");
  let v =
    "https://firebasestorage.googleapis.com/v0/b/" +
    firebase_storage_url_project() +
    "/o/" +
    replaced +
    "?alt=media";
  return v;
}
