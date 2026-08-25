import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_browser_or_node } from "./ebible_version_books_browser_or_node.mjs";
export async function ebible_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  ("The name of every chapter one bible carries, whichever of the two places the bible came from.");
  ("A bible from the Door43 catalogue has no book index page to read, because its books are files and its chapters are marks inside them. So its chapters are read off the chapters themselves next door.");
  ("★ READING THEM OFF THE CHAPTERS NEXT DOOR IS SOMETHING ONLY A BUILD MACHINE CAN DO. That road unpacks a release onto a disk and keeps its answer in a file beside it, and a browser has neither - so it is asked for by name here rather than imported. A bundler follows a plain import whether the branch runs or not, which is how every page that could name a chapter came to be carrying the whole fetch-and-unpack tree in order never to use it.");
  ("The other road asks for the books in a way that knows which of the two places it is running in, because the two answers are not the same work: away from a browser the bible is fetched and unzipped, and in a browser the same list is one small file already published to storage.");
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    let f_name = fn_name("door43_version_chapter_codes");
    let fn = await function_import_relative(f_name);
    let carried = await fn(bible_folder);
    return carried;
  }
  let books = await ebible_version_books_browser_or_node(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
