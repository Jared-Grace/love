import { firebase_bucket } from "./firebase_bucket.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
export async function firebase_storage_download_old(destination) {
  destination = firebase_path_fix(destination);
  let bucket = await firebase_bucket();
  let [buffer] = await bucket.file(destination).download();
  return buffer;
}
