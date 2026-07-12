import { ebible_version_upload_refresh } from "./ebible_version_upload_refresh.mjs";
import { ebible_languages_without_original_english_bible_folders_each } from "./ebible_languages_without_original_english_bible_folders_each.mjs";
export async function ebible_version_upload_refresh_all_languages() {
  await ebible_languages_without_original_english_bible_folders_each(
    ebible_version_upload_refresh,
  );
}
