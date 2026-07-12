import { html_loading } from "./html_loading.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
export async function firebase_storage_download_generic(
  project_url,
  destination,
  http_fn,
) {
  destination = firebase_path_fix(destination);
  async function lambda() {
    let url = firebase_storage_url(destination, project_url);
    let buffer = await http_fn(url);
    return buffer;
  }
  let result = await html_loading(lambda);
  return result;
}
