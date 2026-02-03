import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { ebible_version_readaloud_download_path } from "../../../love/public/src/ebible_version_readaloud_download_path.mjs";
import { list_find_includes } from "../../../love/public/src/list_find_includes.mjs";
import { ebible_chapter_code_to_name_code } from "../../../love/public/src/ebible_chapter_code_to_name_code.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
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
  let file_path = ebible_version_readaloud_download_path(bible_folder);
  let files = await folder_read_paths_async(file_path);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let search = "_" + book_code + "_" + name_code + "_";
  let only = list_find_includes(files, search);
  let contents = await file_read(only);
  let lines = string_split_newline(list2);
  return contents;
  return files;
  let joined = path_join([file_path, chapters_name]);
  let v2 = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = object_property_get(v2, "verse_numbers");
  return list;
}
