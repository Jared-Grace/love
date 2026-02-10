import { ebible_text_to_speech_book } from "../../../love/public/src/ebible_text_to_speech_book.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "../../../love/public/src/ebible_chapters_each_verses_check.mjs";
export async function ebible_apocrypha_text_to_speech() {
  const n = "D:\\programs\\WPy64-312100\\python\\";
  const bible_folder = "engwebu";
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(book) {
    let book_code = property_get(book, "book_code");
    log({
      book_code,
    });
    await ebible_text_to_speech_book(bible_folder, book_code);
  }
  await each_async(books, lambda);
  return;
}
