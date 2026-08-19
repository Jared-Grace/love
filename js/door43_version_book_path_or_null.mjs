import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_books_path } from "./door43_version_books_path.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_single_or_null } from "./list_single_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function door43_version_book_path_or_null(
  door43_folder,
  book_code,
) {
  arguments_assert(arguments, 2);
  ("$plain door43_folder");
  ("$plain book_code");
  ("Where one book of a Door43 bible is written, or nothing when that bible does not carry the book.");
  ("Nothing is a real answer rather than a fault. A translation is a gift and it need not be a whole bible: many are the New Testament alone, and asking one of those for Genesis should be told no rather than stopped.");
  ("The book is found by the code the file name ends with, not by the number in front of it. The numbers are a shelf order and differ between publishers, while the three letters are the same three letters everywhere.");
  ("Asked of the folder each time rather than kept in a list of what each bible holds, so a bible that gains a book starts answering for it with nothing edited.");
  let folder_path = door43_version_books_path(door43_folder);
  let files = await folder_read_paths_async(folder_path);
  let search = text_combine_multiple(["-", book_code, ".usfm"]);
  let found = list_filter_text_includes(files, search);
  let only = list_single_or_null(found);
  return only;
}
