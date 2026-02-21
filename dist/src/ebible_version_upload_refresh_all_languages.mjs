import { ebible_version_upload_refresh } from "../../../love/public/src/ebible_version_upload_refresh.mjs";
import { ebible_languages_without_original_english_bible_folders_each } from "../../../love/public/src/ebible_languages_without_original_english_bible_folders_each.mjs";
export async function ebible_version_upload_refresh_all_languages() {
  await ebible_languages_without_original_english_bible_folders_each(
    ebible_version_upload_refresh,
  );
}
