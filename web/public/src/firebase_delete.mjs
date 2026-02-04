import { retry_standard } from "../../../love/public/src/retry_standard.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
export async function firebase_delete(destination) {
  destination = firebase_path_fix(destination);
  const bucket = await firebase_bucket();
  const file = bucket.file(destination);
  await retry_standard(lambda);
  log_keep(`Deleted data at ${destination}`);
  async function lambda() {
    await file.delete();
  }
}
