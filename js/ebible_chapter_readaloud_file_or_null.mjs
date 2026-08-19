import { list_single_or_null } from "./list_single_or_null.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { ebible_version_readaloud_download_path } from "./ebible_version_readaloud_download_path.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_chapter_readaloud_file_or_null(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Where one chapter of a bible is written out for reading aloud, or nothing when that bible is not read aloud there.";
  "Nothing is a real answer here rather than a fault. A read-aloud edition is one gift per translation and it need not cover every chapter: the Romanian bible is read aloud everywhere except in a hundred and seventeen of the psalms, which are simply not in it. Insisting on a file stopped the reading of every remaining translation at that psalm.";
  "Asked of the folder rather than of a list of what is expected, so a translation that gains chapters later starts answering for them with nothing edited.";
  let folder_path = ebible_version_readaloud_download_path(bible_folder);
  let files = await folder_read_paths_async(folder_path);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let search = text_combine_multiple(["_", book_code, "_", name_code, "_"]);
  let found = list_filter_text_includes(files, search);
  let only = list_single_or_null(found);
  return only;
}
