import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_includes } from "../../../love/public/src/list_filter_includes.mjs";
import { ebible_chapter_code_to_name_code } from "../../../love/public/src/ebible_chapter_code_to_name_code.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
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
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let search = "_" + book_code + "_" + name_code + "_";
  let filtered = list_filter_includes(mapped, search);
  let only = list_single(filtered);
  return only;
  let files = await folder_read_files(file_path);
  return files;
  let joined = path_join([file_path, chapters_name]);
  let v2 = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = object_property_get(v2, "verse_numbers");
  return list;
}
