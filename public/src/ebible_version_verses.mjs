import { each_async } from "./each_async.mjs";
import { ebible_chapters } from "./ebible_chapters.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function ebible_version_verses(bible_folder) {
  let books = await ebible_version_books(bible_folder);
  await each_async(books, lambda);
  async function lambda(book) {
    let book_code = object_property_get(book, "book_code");
    let chapters = await ebible_chapters(bible_folder, book_code);
  }
  return chapters;
}
