import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { error } from "./error.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function firebase_storage_exists(path) {
  path = firebase_path_fix(path);
  let bucket = await firebase_bucket();
  let file = bucket.file(path);
  let exists = null;
  try {
    let [e] = await file.exists();
    exists = e;
  } catch (err) {
    error(err);
    exists = false;
  }
  return exists;
}
