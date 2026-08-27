import { arguments_assert } from "./arguments_assert.mjs";
import { berean_books_path } from "./berean_books_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
export function berean_book_path(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("Where one book of the Berean release is written.");
  ("The publisher names each file by the three-letter book code alone, with no shelf number in front of it, so the name is spelled rather than searched for. The other usfm shelf this repo reads does put a number first and has to have its folder listed to find anything; this one does not, and listing a folder to find a name already known is a read nobody needs.");
  let folder = berean_books_path();
  let file_name = text_combine_multiple([book_code, ".usfm"]);
  let joined = path_join([folder, file_name]);
  return joined;
}
