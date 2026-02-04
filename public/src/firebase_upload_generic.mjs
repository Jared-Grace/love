import { firebase_bucket_file_get } from "../../../love/public/src/firebase_bucket_file_get.mjs";
import { retry_standard } from "../../../love/public/src/retry_standard.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function firebase_upload_generic(destination, settings, buffer) {
  let bucket = null;
  let file = null;
  ({ bucket, file, destination } = await firebase_bucket_file_get(destination));
  let merged = object_merge(
    {
      metadata: {
        cacheControl: "no-cache",
      },
    },
    settings,
  );
  await retry_standard(lambda);
  log_keep(`Uploaded data to ${destination}`);
  const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  log_keep("Accessible at:" + url);
  async function lambda() {
    await file.save(buffer, merged);
  }
}
