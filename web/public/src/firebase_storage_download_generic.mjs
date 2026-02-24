import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { firebase_storage_url } from "../../../love/public/src/firebase_storage_url.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
export async function firebase_storage_download_generic(destination, http_fn) {
  destination = firebase_path_fix(destination);
  async function lambda2() {
    let url = await firebase_storage_url(destination, project_url);
    let buffer = await http_fn(url);
    return buffer;
  }
  let result = await html_loading(lambda2);
  return result;
}
