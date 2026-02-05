import { ebible_version_upload_refresh_all_languages } from "../../../love/public/src/ebible_version_upload_refresh_all_languages.mjs";
import { ebible_versions_english_choices_each } from "../../../love/public/src/ebible_versions_english_choices_each.mjs";
import { ebible_languages_chapters_cache_refresh } from "../../../love/public/src/ebible_languages_chapters_cache_refresh.mjs";
import { ebible_version_upload_refresh } from "../../../love/public/src/ebible_version_upload_refresh.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh_all() {
  marker("1");
  await ebible_version_upload_refresh_all_languages();
  return;
  await ebible_versions_english_choices_each(ebible_version_upload_refresh);
  return;
  let r = await ebible_languages_chapters_cache_refresh();
}
