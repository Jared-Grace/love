import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { g_sermon_generate_book } from "../../../love/public/src/g_sermon_generate_book.mjs";
export async function g_sermon_generate() {
  "dont want to accidentally overwrite sermons";
  return;
  const bible_folder = "engbsb";
  let books = await ebible_version_books(bible_folder);
  async function lambda(b) {
    let book_code = property_get(b, "book_code");
    await g_sermon_generate_book(bible_folder, book_code);
  }
  await each_async(books, lambda);
}
