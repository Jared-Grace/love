import { ebible_version_upload_refresh_all_languages } from "./ebible_version_upload_refresh_all_languages.mjs";
import { ebible_versions_english_choices_each } from "./ebible_versions_english_choices_each.mjs";
import { ebible_languages_chapters_cache_refresh } from "./ebible_languages_chapters_cache_refresh.mjs";
import { ebible_version_upload_refresh } from "./ebible_version_upload_refresh.mjs";
export async function ebible_version_upload_refresh_all() {
  await ebible_version_upload_refresh_all_languages();
  return;
  await ebible_versions_english_choices_each(ebible_version_upload_refresh);
  return;
  let r = await ebible_languages_chapters_cache_refresh();
}
