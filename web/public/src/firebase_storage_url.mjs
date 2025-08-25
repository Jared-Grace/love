import {firebase_storage_url_project} from "./firebase_storage_url_project.mjs";
export function firebase_storage_url(replaced) {
  let v = "https://firebasestorage.googleapis.com/v0/b/" + firebase_storage_url_project() + "/o/" + replaced + "?alt=media";
  return v;
}
