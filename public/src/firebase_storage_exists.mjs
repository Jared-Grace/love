import { string_replace } from "./string_replace.mjs";
import { error } from "./error.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function firebase_storage_exists(path) {
  path = string_replace(path, "\\", "/");
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
