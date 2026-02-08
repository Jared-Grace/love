import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { firebase_storage_url_project } from "../../../love/public/src/firebase_storage_url_project.mjs";
export async function firebase_storage_url(storage_path) {
  let replaced = text_replace(storage_path, "/", "%2F");
  let url =
    "https://firebasestorage.googleapis.com/v0/b/" +
    (await firebase_storage_url_project()) +
    "/o/" +
    replaced +
    "?alt=media";
  return url;
}
