import { firebase_storage_download_generic } from "../../../love/public/src/firebase_storage_download_generic.mjs";
import { http } from "../../../love/public/src/http.mjs";
export async function firebase_storage_download(destination) {
  let fn = http;
  let result = await firebase_storage_download_generic(destination, fn);
  return result;
}
