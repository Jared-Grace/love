import { list_skip_map } from "./list_skip_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { file_read } from "./file_read.mjs";
import { ebible_version_readaloud_download_path } from "./ebible_version_readaloud_download_path.mjs";
import { list_find_includes } from "./list_find_includes.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_chapter_readaloud_lines(
  bible_folder,
  chapter_code,
) {
  "One chapter of a bible as it is written for reading aloud: a line of words for each verse, in the order the verses come, with nothing saying which number each one is.";
  "This is the one place in the repo where a chapter arrives already divided. Everywhere else a chapter is one unbroken run of words and the dividing has to be worked out, so what a line is here is worth having on its own rather than only inside the one reader that first wanted it.";
  "The first two lines are the name of the book and the number of the chapter rather than words of it, so they are stepped over.";
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
  return filtered;
}
