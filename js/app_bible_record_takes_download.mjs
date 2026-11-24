import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { storage_files_download_private_missing } from "./storage_files_download_private_missing.mjs";
export async function app_bible_record_takes_download() {
  "Brings every take the recorder has sent to storage down onto this machine that is not here yet, so a take can be looked at and its sound measured here (human 2026-11-24: syncing, so you can see it), and answers with the addresses written - so an answer of nothing means none has arrived since the last time.";
  "They land in the private folder's mirror of the bucket, outside every repo, because a video of somebody reading has no business in a public repo; the address on disk is the address it has in storage.";
  arguments_assert(arguments, 0);
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: "bible_record/",
  });
  let written = await storage_files_download_private_missing(files);
  return written;
}
