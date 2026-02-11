import { ebible_languages_add_item } from "../../../love/public/src/ebible_languages_add_item.mjs";
import { ebible_languages_chapters_cache_refresh } from "../../../love/public/src/ebible_languages_chapters_cache_refresh.mjs";
import { ebible_version_upload } from "../../../love/public/src/ebible_version_upload.mjs";
export async function ebible_languages_add(bible_folder) {
  await ebible_languages_add_item(bible_folder2);
  await ebible_version_upload(bible_folder);
  let r = await ebible_languages_chapters_cache_refresh();
  return r;
}
