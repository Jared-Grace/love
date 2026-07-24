import { ebible_version_chapters_all_upload } from "./ebible_version_chapters_all_upload.mjs";
import { ebible_offline_chapters_all_from_storage_upload } from "./ebible_offline_chapters_all_from_storage_upload.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function ebible_offline_chapters_all_upload(bible_folder) {
  ("normally build the whole-bible bundle from the freshly downloaded local source, which is fast; if that source cannot build it — missing audio-aligned text, or a versification gap — fall back to assembling from the per-chapter files already in storage so every version still gets the single-request download");
  async function local() {
    await ebible_version_chapters_all_upload(bible_folder);
    return true;
  }
  let ok = await catch_null_async(local);
  if (null_is(ok)) {
    await ebible_offline_chapters_all_from_storage_upload(bible_folder);
  }
}
