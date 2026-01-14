import { ebible_chapter_codes_upload_name } from "../../../love/public/src/ebible_chapter_codes_upload_name.mjs";
import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  let b = browser_is();
  if (b) {
    let file_name2 = ebible_chapter_codes_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      file_name2,
      bible_folder,
      ebible_chapter_codes,
    );
    return value;
  }
  marker("1");
  let books = await ebible_version_books(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  return list;
}
