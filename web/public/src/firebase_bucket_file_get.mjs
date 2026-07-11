import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
export async function firebase_bucket_file_get(destination) {
  destination = firebase_path_fix(destination);
  let bucket = await firebase_bucket();
  let file = bucket.file(destination);
  let v = {
    bucket,
    file,
    destination,
  };
  return v;
}
