import { error } from "./error.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function firebase_storage_exists(path) {
  const bucket = await firebase_bucket();
  const file = bucket.file(path);
  try {
    const [exists] = await file.exists();
    return exists;
  } catch (err) {
    console.error("Error checking file:", err);
    let v = false;
    return v;
  }
}
