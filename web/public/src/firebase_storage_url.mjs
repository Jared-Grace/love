import { text_replace } from "../../../love/public/src/text_replace.mjs";
export  function firebase_storage_url(storage_path, project_url) {
  let replaced = text_replace(storage_path, "/", "%2F");
  let url =
    "https://firebasestorage.googleapis.com/v0/b/" +
    project_url +
    "/o/" +
    replaced +
    "?alt=media";
  return url;
}
