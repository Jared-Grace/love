import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { g_preach_generate_book } from "../../../love/public/src/g_preach_generate_book.mjs";
export async function g_preach_generate() {
  const bible_folder = "engbsb";
  let books = await ebible_version_books(bible_folder);
  return books;
  let book_code = "JAS";
  await g_preach_generate_book(book_code);
}
