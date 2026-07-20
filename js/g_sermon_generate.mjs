import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { g_sermon_generate_book } from "./g_sermon_generate_book.mjs";
export async function g_sermon_generate() {
  "dont want to accidentally overwrite sermons";
  return;
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  async function lambda(b) {
    let book_code = property_get(b, "book_code");
    await g_sermon_generate_book(bible_folder, book_code);
  }
  await each_async(books, lambda);
}
