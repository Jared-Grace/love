import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_text_to_speech_chapter_generic } from "../../../love/public/src/ebible_text_to_speech_chapter_generic.mjs";
import { ebible_chapters_each_verses_list } from "../../../love/public/src/ebible_chapters_each_verses_list.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "../../../love/public/src/ebible_chapters_each_verses_check.mjs";
export async function ebible_apocrypha_text_to_speech() {
  const newLocal = "D:\\programs\\WPy64-312100\\python\\";
  const bible_folder = "engwebu";
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(book) {
    let book_code = object_property_get(book, "book_code");
    let chapter_codes = await ebible_book_code_to_chapter_codes(
      bible_folder,
      book_code,
    );
    async function lambda2(chapter_code) {
      let verses = await ebible_verses(bible_folder, chapter_code);
      await ebible_text_to_speech_chapter_generic(
        bible_folder,
        verses,
        chapter_code,
      );
    }
    await each_async(chapter_codes, lambda2);
    log({
      book_code,
    });
  }
  await each_async(books, lambda);
  return;
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {}
  return;
}
