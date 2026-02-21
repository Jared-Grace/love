import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
export async function firebase_storage_exists(path) {
  path = firebase_path_fix(path);
  const bucket = await firebase_bucket();
  const file = bucket.file(path);
  let exists = null;
  try {
    const [e] = await file.exists();
    exists = e;
  } catch (err) {
    error(err);
    exists = false;
  }
  return exists;
}
