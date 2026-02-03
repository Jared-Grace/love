import { ebible_languages_english_each } from "../../../love/public/src/ebible_languages_english_each.mjs";
import { ebible_version_upload_refresh } from "../../../love/public/src/ebible_version_upload_refresh.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_upload_refresh_all(bible_folder) {
  marker("1");
  await ebible_languages_english_each(async function lambda(bible_folder2) {});
  let v = await ebible_version_upload_refresh(bible_folder);
  return v;
}
