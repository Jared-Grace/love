import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { http } from "../../../love/public/src/http.mjs";
import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
import { firebase_storage_url } from "../../../love/public/src/firebase_storage_url.mjs";
export async function firebase_storage_download(destination) {
  marker("1");
  async function lambda2() {
    destination = firebase_path_fix(destination);
    let b = browser_is();
    if (b) {
      let url = await firebase_storage_url(destination);
      let buffer = await http(url);
      return buffer;
    }
    const bucket = await firebase_bucket();
    let [buffer] = await bucket.file(destination).download();
    return buffer;
  }
  let b2 = browser_is();
  if (b2) {
  } else {
  }
  let result = null;
  result = await html_loading(lambda2);
  return result;
}
