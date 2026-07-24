import { ebible_offline_chapter_codes_name } from "./ebible_offline_chapter_codes_name.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_get } from "./ebible_offline_get.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_chapter_codes_get(bible_folder) {
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (not(downloaded)) {
    return null;
  }
  let name = ebible_offline_chapter_codes_name();
  let chapter_codes = await ebible_offline_get(bible_folder, name);
  return chapter_codes;
}
