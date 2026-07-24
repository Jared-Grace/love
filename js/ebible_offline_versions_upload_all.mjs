import { ebible_languages_without_original_english_bible_folders_each } from "./ebible_languages_without_original_english_bible_folders_each.mjs";
import { ebible_offline_version_upload } from "./ebible_offline_version_upload.mjs";
import { log } from "./log.mjs";
export async function ebible_offline_versions_upload_all() {
  ("one-off backfill: publish the offline index files for every language already added before uploading them became part of adding a language; english already has them and the original interlinear has no ebible source folder, so both are skipped by the iterator");
  async function lambda(bible_folder) {
    log(ebible_offline_versions_upload_all.name, bible_folder);
    await ebible_offline_version_upload(bible_folder);
  }
  await ebible_languages_without_original_english_bible_folders_each(lambda);
}
