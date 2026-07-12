import { each_async } from "./each_async.mjs";
import { ebible_text_to_speech_chapter_generic } from "./ebible_text_to_speech_chapter_generic.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { log } from "./log.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
export async function ebible_text_to_speech_book(bible_folder, book_code) {
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda(chapter_code) {
    log(ebible_text_to_speech_book.name, {
      chapter_code,
    });
    let verses = await ebible_verses(bible_folder, chapter_code);
    await ebible_text_to_speech_chapter_generic(
      bible_folder,
      verses,
      chapter_code,
    );
  }
  await each_async(chapter_codes, lambda);
}
