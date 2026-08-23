import { google_storage_host } from "./google_storage_host.mjs";
import { firebase_bucket_file_get } from "./firebase_bucket_file_get.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { log_keep } from "./log_keep.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function firebase_upload_settings(destination, settings, buffer) {
  "$plain destination";
  "$plain buffer";
  "Writes a file to storage with exactly the settings handed in, and nothing added to them.";
  "THE OTHER DOOR ADDS A DEFAULT AND ADDS IT STRICTLY, so a caller that says anything about how the file should be described collides with the default rather than replacing it. That default is right for the writing most callers do and wrong for a picture, which wants to be kept and re-asked about rather than fetched again every time - so a caller that has thought about it comes in here instead.";
  let bucket = null;
  let file = null;
  ({ bucket, file, destination } = await firebase_bucket_file_get(destination));
  await retry_standard(lambda);
  let message = text_combine("Uploaded data to ", destination);
  log_keep(firebase_upload_settings.name, message);
  let host = google_storage_host();
  let url = text_combine_multiple([
    "https://",
    host,
    "/",
    bucket.name,
    "/",
    file.name,
  ]);
  let message2 = text_combine("Accessible at:", url);
  log_keep(firebase_upload_settings.name, message2);
  async function lambda() {
    await file.save(buffer, settings);
  }
}
