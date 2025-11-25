import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { g_preach_generate_book } from "../../../love/public/src/g_preach_generate_book.mjs";
export async function g_preach_generate() {
  const bible_folder = "engbsb";
  let books = await ebible_version_books(bible_folder);
  await each_async(list, async function lambda(item) {});
  return books;
  await g_preach_generate_book(bible_folder, book_code);
}
