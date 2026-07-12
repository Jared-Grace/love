import { firebase_storage_download_generic } from "./firebase_storage_download_generic.mjs";
import { http } from "./http.mjs";
export async function firebase_storage_download(project_url, destination) {
  let fn = http;
  let result = await firebase_storage_download_generic(
    project_url,
    destination,
    fn,
  );
  return result;
}
