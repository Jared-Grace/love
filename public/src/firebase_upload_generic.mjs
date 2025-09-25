import { retry } from "./retry.mjs";
import { object_merge } from "./object_merge.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { log_keep } from "./log_keep.mjs";
export async function firebase_upload_generic(destination, settings, buffer) {
  destination = firebase_path_fix(destination);
  const bucket = await firebase_bucket();
  const file = bucket.file(destination);
  let merged = object_merge(
    {
      metadata: {
        cacheControl: "no-cache",
      },
    },
    settings,
  );
  await retry(5, lambda);
  log_keep(`Uploaded data to ${destination}`);
  const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  log_keep("Accessible at:" + url);
  async function lambda() {
    await file.save(buffer, merged);
  }
}
