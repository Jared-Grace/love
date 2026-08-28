import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_usfm_download_path } from "./ebible_version_usfm_download_path.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_single_or_null } from "./list_single_or_null.mjs";
export async function ebible_version_usfm_book_path_or_null(
  bible_folder,
  book_code,
) {
  arguments_assert(arguments, 2);
  ("$plain bible_folder");
  ("$plain book_code");
  ("Where one book of an eBible translation held as usfm is written, or nothing when that translation does not carry the book.");
  ("Nothing is a real answer rather than a fault, the same as on the other numbered shelf: a translation is a gift and it need not be a whole bible, and asking a New Testament for Genesis should be told no rather than stopped.");
  ("★ THE NAME CARRIES THE TRANSLATION AS WELL AS THE BOOK, WHICH IS WHY THE OTHER SHELF'S FINDER WILL NOT DO. eBible writes 20-PSAengwebu.usfm - a shelf number in front and the folder's own word behind - where Door43 writes 19-PSA.usfm. A search for the book code and the extension side by side finds nothing here, and finding nothing reads exactly like a bible that does not carry the book.");
  ("The number in front is not read. It is a shelf order and differs between publishers, while the three letters are the same three letters everywhere.");
  let folder_path = ebible_version_usfm_download_path(bible_folder);
  let files = await folder_read_paths_async(folder_path);
  let search = text_combine_multiple(["-", book_code, bible_folder, ".usfm"]);
  let found = list_filter_text_includes(files, search);
  let only = list_single_or_null(found);
  return only;
}
