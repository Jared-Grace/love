import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { firebase_storage_url } from "../../../love/public/src/firebase_storage_url.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
export async function firebase_storage_download_generic(destination, fn) {
  destination = firebase_path_fix(destination);
  async function lambda2() {
    let url = await firebase_storage_url(destination);
    let buffer = await fn(url);
    return buffer;
  }
  let result = await html_loading(lambda2);
  let r = {
    result,
    destination,
  };
  return r;
}
