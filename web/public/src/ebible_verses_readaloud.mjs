import { ebible_verses_before } from "../../../love/public/src/ebible_verses_before.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { ebible_verses_numbers } from "../../../love/public/src/ebible_verses_numbers.mjs";
import { ebible_verse_new_text } from "../../../love/public/src/ebible_verse_new_text.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
import { string_trim } from "../../../love/public/src/string_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { ebible_version_readaloud_download_path } from "../../../love/public/src/ebible_version_readaloud_download_path.mjs";
import { list_find_includes } from "../../../love/public/src/list_find_includes.mjs";
import { ebible_chapter_code_to_name_code } from "../../../love/public/src/ebible_chapter_code_to_name_code.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function ebible_verses_readaloud(bible_folder, chapter_code) {
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  let verse_numbers = await ebible_verses_numbers(bible_folder, chapter_code);
  let verse_number = ebible_verses_before();
  list_remove_if_exists(verse_numbers, verse_number);
  let file_path = ebible_version_readaloud_download_path(bible_folder);
  let files = await folder_read_paths_async(file_path);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let search = "_" + book_code + "_" + name_code + "_";
  let only = list_find_includes(files, search);
  let contents = await file_read(only);
  let lines = text_split_newline(contents);
  let skipped = list_skip(lines, 2);
  let mapped = list_map(skipped, string_trim);
  let filtered = list_filter_empty_not_is(mapped);
  let list = list_map_pairs(filtered, verse_numbers, ebible_verse_new_text);
  return list;
}
