import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { phone_photos_prefix } from "./phone_photos_prefix.mjs";
import { storage_files_download_private_missing } from "./storage_files_download_private_missing.mjs";
export async function phone_photos_download_missing() {
  "Brings every photo sent from the phone photos screen down onto this machine that is not here yet, and answers with the addresses written - so an answer of nothing means none has arrived since the last time.";
  "They land in the private folder's mirror of the bucket, outside every repo, because a photo off somebody's phone has no business in a public repo; the address on disk is the address it has in storage.";
  arguments_assert(arguments, 0);
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: phone_photos_prefix(),
  });
  let written = await storage_files_download_private_missing(files);
  return written;
}
