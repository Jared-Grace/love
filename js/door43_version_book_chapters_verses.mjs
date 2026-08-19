import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_book_path_or_null } from "./door43_version_book_path_or_null.mjs";
import { file_read } from "./file_read.mjs";
import { null_is } from "./null_is.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
export async function door43_version_book_chapters_verses(
  door43_folder,
  book_code,
) {
  arguments_assert(arguments, 2);
  ("$plain door43_folder");
  ("$plain book_code");
  ("One book of a Door43 bible, cut into its chapters and each chapter into its verses.");
  ("Nothing is answered for a book this bible does not carry, which is a real state and not a fault - many translations are the New Testament alone.");
  let file_path = await door43_version_book_path_or_null(
    door43_folder,
    book_code,
  );
  let uncarried = null_is(file_path);
  if (uncarried) {
    return null;
  }
  let usfm = await file_read(file_path);
  let chapters = usfm_chapters_verses(usfm);
  return chapters;
}
