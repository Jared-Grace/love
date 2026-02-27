import { ebible_verses_readaloud } from "../../../love/public/src/ebible_verses_readaloud.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { ebible_chapters_upload_refresh } from "../../../love/public/src/ebible_chapters_upload_refresh.mjs";
export async function sandbox() {
  let bible_folder = "engbsb";
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let item = list_find_property(chapters, "chapter_code", "AMO09");
  let list = await ebible_verses_readaloud(bible_folder2, chapter_code);
  return item;
  return;
  await ebible_chapters_upload_refresh(bible_folder);
}
