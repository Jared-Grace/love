import { firebase_bucket_file_get } from "../../../love/public/src/firebase_bucket_file_get.mjs";
import { retry_standard } from "../../../love/public/src/retry_standard.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function firebase_upload_generic(destination, settings, buffer) {
  let bucket = null;
  let file = null;
  ({ bucket, file, destination } = await firebase_bucket_file_get(destination));
  let merged = object_merge_set(
    {
      metadata: {
        cacheControl: "no-cache",
      },
    },
    settings,
  );
  await retry_standard(lambda);
  log_keep(
    firebase_upload_generic.name,
    text_combine("Uploaded data to ", destination),
  );
  let url = text_combine_multiple([
    "https://storage.googleapis.com/",
    bucket.name,
    "/",
    file.name,
  ]);
  log_keep(firebase_upload_generic.name, text_combine("Accessible at:", url));
  async function lambda() {
    await file.save(buffer, merged);
  }
}
