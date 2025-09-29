import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  marker("1");
  let books = await ebible_version_books(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  return list;
}
