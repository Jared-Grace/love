import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { ebible_chapter_codes_upload_name } from "../../../love/public/src/ebible_chapter_codes_upload_name.mjs";
import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  assert_arguments(arguments, 1);
  let b = browser_is();
  if (b) {
    let file_name = ebible_chapter_codes_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      ebible_chapter_codes,
      bible_folder,
      file_name,
    );
    return value;
  }
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
