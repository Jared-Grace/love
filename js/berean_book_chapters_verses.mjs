import { arguments_assert } from "./arguments_assert.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
export async function berean_book_chapters_verses(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("One book of the Berean release, cut into its chapters and each chapter into its verses.");
  ("A book that cannot be found is a fault here rather than an answer. The other usfm shelf this repo reads answers nothing for a missing book, because many translations on it are the New Testament alone and asking one of those for Genesis should be told no. This is a whole bible of sixty-six, so a gap in it means the fetch went wrong and saying so is the useful answer.");
  let file_path = berean_book_path(book_code);
  let usfm = await file_read(file_path);
  let chapters = usfm_chapters_verses(usfm);
  return chapters;
}
