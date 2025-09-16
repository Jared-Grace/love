import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { ebible_chapters } from "./ebible_chapters.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_books_to_chapter_codes(books, bible_folder) {
  async function lambda2(la) {
    await each_async(books, lambda);
    async function lambda(book) {
      let book_code = object_property_get(book, "book_code");
      let chapters = await ebible_chapters(bible_folder, book_code);
      la(chapters);
    }
  }
  let list = await list_adder_multiple_async(lambda2);
  return list;
}
