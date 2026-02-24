import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
export async function firebase_storage_download_old(destination) {
  destination = firebase_path_fix(destination);
  const bucket = await firebase_bucket();
  let [buffer] = await bucket.file(destination).download();
  return buffer;
}
