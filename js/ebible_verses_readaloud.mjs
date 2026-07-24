import { list_skip_map } from "./list_skip_map.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { ebible_verses_numbers } from "./ebible_verses_numbers.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { file_read } from "./file_read.mjs";
import { ebible_version_readaloud_download_path } from "./ebible_version_readaloud_download_path.mjs";
import { list_find_includes } from "./list_find_includes.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { browser_is } from "./browser_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  let search = text_combine_multiple(["_", book_code, "_", name_code, "_"]);
  let only = list_find_includes(files, search);
  let contents = await file_read(only);
  let lines = text_split_newline(contents);
  let mapped = list_skip_map(lines, 2, text_trim);
  let filtered = list_filter_text_empty_not_is(mapped);
  let list = list_map_pairs(filtered, verse_numbers, ebible_verse_new_text);
  return list;
}
