import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { ebible_version_readaloud_download } from "../../../love/public/src/ebible_version_readaloud_download.mjs";
import { ebible_chapter_verse_numbers } from "../../../love/public/src/ebible_chapter_verse_numbers.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verses_readaloud(bible_folder, chapter_code) {
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  marker("1");
  let file_path = await ebible_version_readaloud_download(bible_folder);
  let files = await folder_read_files(path_folder);
  let joined = path_join([file_path, chapters_name]);
  let v2 = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = object_property_get(v2, "verse_numbers");
  return list;
}
