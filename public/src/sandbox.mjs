import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { ebible_chapters_upload_refresh } from "../../../love/public/src/ebible_chapters_upload_refresh.mjs";
export async function sandbox() {
  let bible_folder = "engbsb";
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let item = list_find_property(list, property_name, property_value);
  return chapters;
  return;
  await ebible_chapters_upload_refresh(bible_folder);
}
