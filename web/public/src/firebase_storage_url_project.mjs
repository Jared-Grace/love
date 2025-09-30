import { firebase_name } from "../../../karate_code/public/src/firebase_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function firebase_storage_url_project() {
  marker("1");
  const prefix = firebase_name();
  let url = prefix + ".firebasestorage.app";
  return url;
}
