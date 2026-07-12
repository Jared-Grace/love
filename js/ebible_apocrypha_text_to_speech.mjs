import { ebible_text_to_speech_book } from "./ebible_text_to_speech_book.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
export async function ebible_apocrypha_text_to_speech() {
  let n = "D:\\programs\\WPy64-312100\\python\\";
  let bible_folder = "engwebu";
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(book) {
    let book_code = property_get(book, "book_code");
    log(ebible_apocrypha_text_to_speech.name, {
      book_code,
    });
    await ebible_text_to_speech_book(bible_folder, book_code);
  }
  await each_async(books, lambda);
  return;
}
