import { firebase_name } from "./firebase_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_storage_url_project() {
  marker("1");
  const prefix = await firebase_name();
  let url = prefix + ".firebasestorage.app";
  return url;
}
