import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_get } from "./ebible_offline_get.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_chapter_verses_get(
  bible_folder,
  chapter_code,
) {
  "nothing downloaded means no reason to touch browser storage at all, so a reader who never asked for an offline copy pays nothing";
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (not(downloaded)) {
    return null;
  }
  let verses = await ebible_offline_get(bible_folder, chapter_code);
  return verses;
}
