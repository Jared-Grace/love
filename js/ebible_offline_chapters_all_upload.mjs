import { ebible_version_chapters_all_upload } from "./ebible_version_chapters_all_upload.mjs";
import { ebible_offline_chapters_all_plain_upload } from "./ebible_offline_chapters_all_plain_upload.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function ebible_offline_chapters_all_upload(bible_folder) {
  ("normally build the whole-bible bundle with the audio-aligned reader, which the rest of the pipeline already uses; if that cannot run — no recording for this version, or a versification gap — fall back to the plain text reader so every version still gets the single-request download");
  async function aligned() {
    await ebible_version_chapters_all_upload(bible_folder);
    return true;
  }
  let ok = await catch_null_async(aligned);
  if (null_is(ok)) {
    await ebible_offline_chapters_all_plain_upload(bible_folder);
  }
}
