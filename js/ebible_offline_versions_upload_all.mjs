import { ebible_languages_without_original_english_bible_folders_each } from "./ebible_languages_without_original_english_bible_folders_each.mjs";
import { ebible_offline_version_upload } from "./ebible_offline_version_upload.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { log } from "./log.mjs";
export async function ebible_offline_versions_upload_all() {
  ("one-off backfill: publish the offline index files for every language already added before uploading them became part of adding a language; english already has them and the original interlinear has no ebible source folder, so both are skipped by the iterator; one language failing must not stop the rest, so each is guarded and the failures are returned");
  let failed = [];
  async function lambda(bible_folder) {
    log(ebible_offline_versions_upload_all.name, bible_folder);
    async function upload() {
      await ebible_offline_version_upload(bible_folder);
      return true;
    }
    let ok = await catch_null_async(upload);
    if (null_is(ok)) {
      list_add(failed, bible_folder);
    }
  }
  await ebible_languages_without_original_english_bible_folders_each(lambda);
  return failed;
}
